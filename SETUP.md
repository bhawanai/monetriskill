# MonetriSkill — Setup Guide

## Prerequisites

Install Node.js (v18 or later): https://nodejs.org

## Quick Start

```bash
cd /Users/bhawana/Documents/Github/monetriskill
npm install
npm run dev
```

Then open http://localhost:3000

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to https://vercel.com → Import Project
3. Select the repo → Deploy
4. Your site will be live at a Vercel URL

To connect your custom domain (monetriskill.com):
- Go to Vercel → Project → Settings → Domains
- Add monetriskill.com and follow the DNS instructions
