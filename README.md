# CivilCity

CivilCity is a Next.js website for a Sunshine Coast civil engineering consultancy.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Launch checklist

- Confirm the launch email address in `src/lib/site.ts`.
- Add a public phone number in `src/lib/site.ts` if CivilCity wants phone enquiries shown on the site.
- Set `CONTACT_WEBHOOK_URL` in hosting if form enquiries should post to an inbox automation or webhook.
- Connect Google Search Console, Analytics, and Google Business Profile.
- Review all RPEQ and accreditation claims before publishing. The site intentionally does not claim Unitywater accreditation.

## Content model

- Services live in `src/lib/site.ts` under `services`.
- Blog posts live in `src/lib/site.ts` under `blogPosts`.
- Sitemap and robots are generated from the same content data.
