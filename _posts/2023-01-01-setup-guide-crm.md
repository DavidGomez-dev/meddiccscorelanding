---
layout: single
title: "Meddicc Score CRM Guide"
categories: blog
tags:
  - setup guide
classes: wide no_padding_top
date: 2023-01-01 16:54:38 +0100
excerpt: Guide for setting up and using Meddicc Score inside the standalone CRM experience.
sidebar_resume: true
header:
  overlay_image: /assets/images/zermatt.jpg
  teaser: /assets/images/zermatt.jpg
  caption:
  video:
    side: true
    id: w3IJ8lJpCIw?rel=0&modestbranding=1&autoplay=0&mute=1&playsinline=1
    provider: "youtube"
---

Use this guide to work with Meddicc Score inside the built-in CRM (deals, contacts, companies). The CRM runs on its own — no HubSpot cards are required — and you can optionally blend HubSpot pipeline data on top of it from the Settings page.

## Quick start
- Sign up or sign in at `/auth/signup` or via the invite email sent from **Settings → Users**. Set your password, then open `/crm`.
- The top bar shows your plan and a global search. Use the **Upgrade** button if you want to raise limits or add seats.
- Create your first company, contact, or deal from the list views. Free workspaces can store up to five of each entity before an upgrade prompt appears.
- Optional: connect your HubSpot pipeline in **Settings → Data sources**. HubSpot data will be shown read-only; CRM records remain editable.

## Navigation and dashboards
- Home surfaces pipeline coverage (closing this quarter, past due, win/loss) plus an urgency board that sorts dated deals by close date and MEDDICC score.
- Contact follow-ups highlight people linked to dated deals, showing assessment status, talking points, and draft emails when available.
- Quick actions in the hero let you jump to **Review deals** or **Create deal**. Global search in the header finds deals, contacts, and companies across the workspace.

## Deals workspace
- List view: filter by stage, framework, or text search. Each row shows stage, framework tag, MEDDICC gauge (0‑100), close date, and amount.
- Stages available out of the box: Prospecting, Qualification, Discovery, Demo/Presentation, Proposal, Negotiation, Commit, Closed Won, Closed Lost.
- Actions on CRM deals: create, clone, or delete. HubSpot-synced deals remain visible but are not editable.
- Associations: link contacts and companies to a deal from the form; links sync in both directions so the related records stay in step.

### Deal form and scoring
- Core fields: name, amount, close date, stage, and framework selector. Frameworks include MEDDICC, MEDDPICC, BANT, SPICED, GPCTBA/C&I, FAINT, CHAMP, SCOTSMAN, ANUM, SPIN, and Command of the Message.
- MEDDICC questions show inline guidance (info icon). Feedback returned by AI is pinned under each section.
- **Score with AI** (or the pencil/manual score field) uses the model configured in Settings. The AI writes section feedback, calculates the score (0‑100), and produces **Next steps** / deal assessment.
- If allowed in Settings, reps can switch frameworks per deal and edit the numeric score manually. Automatic rescoring after form edits can be toggled in Settings.

## Contacts workspace
- Store name, email, job title, and associated companies. Link deals so the contact appears in follow-up queues.
- Save the contact and link at least one deal to enable **Assess with AI**. The assessment returns a summary, talking points, and (when available) a draft email you can open from the card.
- When HubSpot sync is active, contact editing is read-only; create CRM contacts to edit directly.

## Companies workspace
- Track company name, website, industry, address, and description.
- Link deals and contacts; gauges show deal scores so you can see account health at a glance. You can create a new deal straight from the company view.

## Settings and administration
- Access: only workspace admins can save changes here.
- **Data sources & access**: CRM data is always on. Optionally connect HubSpot; choose whether reps can switch frameworks, edit scores, and view reports.
- **Scoring & AI**: pick scoring method (all questions vs. per-section average), choose the AI provider (OpenAI, Google, Anthropic, Meta via Groq, GPT-OSS via Groq, or Azure OpenAI), and, if using Azure, store the resource/base URL and API key. Enable automatic scoring to rescore after form edits.
- **Company profile**: add name, industry, value proposition, pains, and products to steer AI outputs toward your messaging.
- **Frameworks**: pick the default framework for new deals and edit questions/guidance per section. At least one question per section is required.
- **Users & licenses**: view seat usage, invite teammates (free or premium), upgrade/downgrade seats, promote/demote admins, or delete users. Premium/team plans include more seats; free workspaces start with none.
- **Billing**: upgrade or open the customer portal from Settings. The danger zone for deleting a workspace is currently disabled in the UI.

## Limits and billing
- Free plan: up to 5 deals, 5 contacts, and 5 companies. Creating beyond the limit shows the paywall.
- Premium/Team: adds more seats and removes the low record limits. Use the **Upgrade** button in the header or **Settings → Billing & workspace health** to manage subscriptions.

## Troubleshooting tips
- Seeing sample data or empty lists? Confirm you are signed in and, if you rely on HubSpot data, that the correct userId/login is connected in **Settings → Data sources**.
- Cannot edit a record? Records synced from HubSpot are read-only inside the CRM. Create or clone the record in the CRM workspace to edit.
- “Score with AI” disabled? Save the deal first and complete some MEDDICC fields. Automatic scoring only runs when questions have values.
- Contact assessment button missing? Save the contact and link at least one deal; the AI needs deal context to generate an assessment.
- Hitting seat or record limits? Check **Settings → Users** for seat usage, or upgrade from the header/Settings.
