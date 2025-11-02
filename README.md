# ANYWORK

ANYWORK is a digital marketplace that connects verified artisans and skilled workers with clients or employers who need reliable services. It eliminates the uncertainty of informal referrals by providing a trusted, professional hiring environment.

## Purpose

ANYWORK connects verified artisans and skilled workers with clients who need reliable, professional services. The platform streamlines hiring, promotes trust, and offers flexible payment options (including crypto), empowering artisans and growing the local service economy.

## Vision

To become the go-to platform across Africa where skilled professionals are showcased, verified, and hired directly — with transparency, reliability, and flexible payment options. ANYWORK empowers artisans, streamlines hiring, and builds trust in the local service economy.

## Features (high level)

- Profiles for verified artisans and skilled workers
- Search and discovery by skill, rating, location
- Booking and hiring workflows
- Reviews and trust signals (verification badges)
- Flexible payments (bank, mobile money, and crypto via WalletConnect)
- Admin/verification tooling for onboarding artisans

## Repository structure

- `frontend/` — Next.js frontend (App Router) and UI
- `smartcontract/` — Smart contracts and Hardhat tooling
- `.github/ISSUES/` — Issue templates / repository issue drafts

## Quickstart (development)

Prerequisites

- Node.js (LTS recommended, >=16/18)
- npm (or yarn/pnpm)

Frontend

1. Change into the frontend folder and follow the README there:

```bash
cd frontend
npm install
npm run dev
```

2. The frontend runs on http://localhost:3000 by default (Next.js).

Smartcontracts

1. Change into the `smartcontract` folder and install dependencies:

```bash
cd smartcontract
npm install
```

2. Compile or run Hardhat tasks:

```bash
npx hardhat compile
npx hardhat test
```

## WalletConnect note

This project plans to support crypto payments and wallet interactions via WalletConnect (v2 recommended). See `frontend/README.md` for recommended env variables and integration notes.

## Contributing

Contributions are welcome. Please open issues or pull requests. See `.github/ISSUES/` for issue drafts and the frontend issue for the landing page + WalletConnect integration.

## Contact

For project ownership and maintainer contact, check the repository settings or open an issue and tag the team.

---

This README is intentionally concise — if you'd like a more detailed developer onboarding (CI, deployments, env matrix), tell me which parts to expand and I will add them.
