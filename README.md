# CPC Landing / Waitlist

Standalone landing page for ClubPro Connect. This repository is intentionally independent from the CPC application repository.

## Preview
Serve the repository root with any static HTTP server.

## Email collection
Set `window.CPC_WAITLIST_ENDPOINT` in `config.js`. Forms POST JSON:
`{ email, source: "cpc-landing", created_at }`.

The endpoint must return HTTP 2xx. Never put a secret key in public frontend files.

## Deployment
The repository root can be deployed directly as a static site on Vercel.
