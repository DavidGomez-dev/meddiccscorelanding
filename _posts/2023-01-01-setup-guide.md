---
layout: single
title: "Meddicc Score HubSpot Setup Guide"
categories: blog
tags:
  - setup guide
classes: wide
date: 2023-01-01 16:54:38 +0100
excerpt: Setup Guide for installing Meddicc Score in HubSpot
header:
  overlay_image: /assets/images/imagesocial.png
  teaser: /assets/images/imagesocial.png
  caption:
---

#### Step-by-Step Instructions

**1. Connect Your HubSpot Account**

Click the "Install App" button to link your HubSpot account.

<a href="{{ site.pwalink }}" target="_blank">![Install](../../assets/images/installBtn.png)</a>

---

**2. Login to Your HubSpot Account**

Simply use your standard HubSpot login credentials.

![Login](../../assets/images/guide1.png)

---

**3. Select Your HubSpot Account**

If you have multiple accounts, select the one you wish to use. Single accounts will be chosen automatically.

---

**4. Confirm Permissions**

Approve the necessary permissions for Meddicc Score to interface with your HubSpot CRM.

![Permissions](../../assets/images/guide2.png)

---

**5. Access Meddicc Score from the HubSpot Sidebar**

Locate Meddicc Score within the HubSpot sidebar under Deal.

![Access from Sidebar](../../assets/images/guide3.png)

---

**6. Begin Scoring**

- Select the qualification framework that you prefer for this deal. Every deal can have different framework.
- Start using Meddicc Score to complete the information form for that Deal.
- When clicking on Score, the AI model will return a Score based on the data introduced and feedback for every step.

![Begin Scoring](../../assets/images/guide4.png)

- It is possible to modify the Score manually by clicking on the pencil icon below the score.

![Manual Scoring](../../assets/images/guide41.png)

---

**7. Editing the framework questions and default framework**

- Clicking the gear icon on 'Select Framework' allows you to edit the questions for that framework. The change will apply to all account members (not just the individual user). The modification will not affect the answers or scores previously submitted but will update the questions for all deals where that framework has been used.

![Editing](../../assets/images/guide9.png)

- Turning on the 'Default Framework' switch will set the selected framework as the default for the entire account. Every new deal will use this framework by default. The change will not affect the answers or frameworks previously submitted in existing deals. The default framework is initially set to MEDDICC.

![Editing](../../assets/images/guide10.png)

---

**8. Report and Export**

- Clicking on Report, a full account pipeline summary can be found.
- From the report is possible to download a CSV with all the notes and scores saved.

![Reporting](../../assets/images/guide8.png)

- The Score is also available as a custom Hubspot variable (score_meddicc), and can be used in reporting, columns, etc.

![Reporting](../../assets/images/features4.png)

---

**8. Upgrade to Premium**

If you like Meddicc Score and want to use it for more than 5 deals, you can upgrade easily from the own app. Click on "Upgrade Now" and you will go to a checkout powered by Stripe.

![Ugrade](../../assets/images/guide5.png)

### Uninstalling Meddicc Score

Navigate to **Settings > Integrations > Connected Apps** in HubSpot to uninstall Meddicc Score without impacting your HubSpot data.

![Uninstall](../../assets/images/guide6.png)

---

### Troubleshooting

**I cannot see Score as a custom variable / The Score in HubSpot is not updated automatically**

To enable this, you may need to reauthorize the app for the new permits required. Please click here

<a href="{{ site.pwalink }}" target="_blank">![Install](../../assets/images/installBtn.png)</a>

You may also need before that, to have permits to add new properties (or someone else who has authorized the app with permits).

![troubleshooting](../../assets/images/trouble1.png)

It would be possible also to create the variable manually. It can be done in Settings:

![troubleshooting](../../assets/images/trouble12.png)

It is very important to make it work that:

- the internal name be exactly "score_meddicc"
- Object type is "Deal"
- Group is "Deal information"

![troubleshooting](../../assets/images/trouble2.png)
