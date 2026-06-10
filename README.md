# CivilCity

CivilCity is a Next.js website for a Sunshine Coast civil engineering consultancy.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Launch checklist

- Replace the placeholder phone number in `src/lib/site.ts`.
- Confirm the launch email address in `src/lib/site.ts`.
- Set `CONTACT_WEBHOOK_URL` in hosting if form enquiries should post to a CRM, inbox automation, or webhook.
- Connect Google Search Console, Analytics, and Google Business Profile.
- Review all RPEQ and accreditation claims before publishing. The site intentionally does not claim Unitywater accreditation.

## Content model

- Services live in `src/lib/site.ts` under `services`.
- Blog posts live in `src/lib/site.ts` under `blogPosts`.
- Sitemap and robots are generated from the same content data.
