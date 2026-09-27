import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = '.next/server/app';
const serviceFiles = fs.readdirSync(path.join(root, 'services')).filter((file) => file.endsWith('.html'));
const serviceSlugs = new Set(serviceFiles.map((file) => file.slice(0, -5)));
const priority = ['civil-engineering-advice', 'reconfiguration-of-a-lot-engineering',
  'stormwater-drainage-design', 'operational-works-applications', 'rpeq-certification', 'engineering-due-diligence'];

for (const slug of priority) {
  const html = fs.readFileSync(path.join(root, 'services', `${slug}.html`), 'utf8');
  assert(html.includes('<table') && html.includes('What to send for a proposal'), `${slug}: missing proposal guidance`);
  assert(html.includes(`/contact?service=${slug}#enquiry`), `${slug}: missing scoped contact link`);
  assert(!/planned to launch|This page supports searchers/.test(html), `${slug}: internal draft text exposed`);
  for (const [, guide] of html.matchAll(/href="\/insights\/([^"?#]+)"/g)) {
    assert(fs.existsSync(path.join(root, 'insights', `${guide}.html`)), `${slug}: broken guide link ${guide}`);
  }
}

const articleFiles = fs.readdirSync(path.join(root, 'insights')).filter((file) => file.endsWith('.html'));
for (const file of articleFiles) {
  const html = fs.readFileSync(path.join(root, 'insights', file), 'utf8');
  const match = html.match(/href="\/contact\?service=([^"&#]+)#enquiry"/);
  assert(match && serviceSlugs.has(match[1]), `${file}: missing or invalid proposal destination`);
}
console.log(`Commercial journeys verified: ${priority.length} priority services and ${articleFiles.length} articles.`);

// Optional HTTP checks against a running build. Never submit the contact form.
if (process.env.SITE_TEST_URL) {
  const base = process.env.SITE_TEST_URL;
  for (const slug of serviceSlugs) {
    const serviceHtml = fs.readFileSync(path.join(root, 'services', `${slug}.html`), 'utf8');
    const schemas = [...serviceHtml.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
      .flatMap((match) => JSON.parse(match[1]));
    const expected = schemas.find((schema) => schema['@type'] === 'Service')?.name;
    const response = await fetch(`${base}/contact?service=${slug}`);
    assert.equal(response.status, 200, `${slug}: contact page unavailable`);
    const html = await response.text();
    const select = html.match(/<select[^>]*name="service"[^>]*>([\s\S]*?)<\/select>/)?.[1];
    assert(select, `${slug}: service field missing`);
    const selected = select.match(/<option[^>]*selected=""[^>]*>(.*?)<\/option>/)?.[1];
    assert.equal(selected?.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"'), expected,
      `${slug}: incorrect service selected`);
  }
  for (const query of ['', '?service=invalid', '?service=rpeq-certification&service=stormwater-drainage-design']) {
    const response = await fetch(`${base}/contact${query}`);
    const html = await response.text();
    assert(/<option[^>]*selected=""[^>]*>Not sure yet<\/option>/.test(html), `Unsafe fallback for ${query}`);
  }
  console.log('All service selections and invalid-parameter fallbacks verified over HTTP. No enquiries sent.');
}
