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

<a href="{{ site.pwalink }}" target="_blank" class="w-50">![Install](../../assets/images/installBtn.png)</a>

---

**2. Login to Your HubSpot Account**

Simply use your standard HubSpot login credentials.

![Login](../../assets/images/guide1.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

---

**3. Select Your HubSpot Account**

If you have multiple accounts, select the one you wish to use. Single accounts will be chosen automatically.

![Account](../../assets/images/guide2.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

---

**4. Confirm Permissions**

Approve the necessary permissions for Meddicc Score to interface with your HubSpot CRM and click on "Connect app".

![Permissions](../../assets/images/guide21.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

---

**5. Access Meddicc Score from the HubSpot Sidebar**

Locate Meddicc Score within the HubSpot sidebar under Deal.

![Access from Sidebar](../../assets/images/guide3.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

---

**6. Begin Scoring**

- The first time you access a Deal, the default framework (normally MEDDICC) is used. (The default framework can be changed in the Settings.)
- Meddicc Score retrieves the relevant information of the last 100 Deal Engagements (Emails, Meetings, Calls, Tasks, Notes...) recorded in HubSpot. AI analyzes this data to auto-fill responses for the Framework Questions.
  Note: Comments to engagements are not gathered since they are not available through the HubSpot API.

![Auto fill](../../assets/images/poster-clip.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

- Then the AI model return a Score based on the data introduced and feedback for every step. The responses, feedback and score are stored.
- Users can manually update the pre-filled responses on the form at any time.
- Clicking on Score will trigger the AI to reassess and recalculate the Score based on updated data.

![Auto scoring](../../assets/images/guide42.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

- Users can also modify the Score manually by clicking the pencil icon below the score.
- All scores are stored in HubSpot as a custom variable named "score_meddicc".

![Manual Scoring](../../assets/images/guide41.png){: .w-50 .my-5 .border .border-3 .border-primary .rounded .rounded-3}

---

**7. Change the Framework**

- Users can select a different qualification framework for each Deal.
- AI will prepopulate the selected framework with relevant information from the Deal.
- However, switching frameworks will not automatically recalculate the Score, ensuring that old responses remain accessible.
- Users can return to the previous framework at any time.

![Begin Scoring](../../assets/images/guide4.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

---

**8. Settings: Editing the framework questions and default framework**

- Clicking the gear icon on 'Select Framework' allows you to edit the questions for that framework. The change will apply to all account members (not just the individual user). The modification will not affect the answers or scores previously submitted but will update the questions for all deals where that framework has been used.

![Editing](../../assets/images/guide9.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

- Turning on the 'Default Framework' switch will set the selected framework as the default for the entire account. Every new deal will use this framework by default. The change will not affect the answers or frameworks previously submitted in existing deals. The default framework is initially set to MEDDICC.

![Editing](../../assets/images/guide10.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

---

**9. Report and Export**

- Clicking on Report, a full account pipeline summary can be found.
- From the report is possible to download a CSV with all the notes and scores saved.

![Reporting](../../assets/images/guide8.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

- The Score is also available as a custom Hubspot variable (score_meddicc), and can be used in reporting, columns, etc.

![Reporting](../../assets/images/features4.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

---

**10. Upgrade to Premium**

If you like Meddicc Score and want to use it for more than 5 deals, you can upgrade easily from the own app. Click on "Upgrade Now" and you will go to a checkout powered by Stripe.

![Ugrade](../../assets/images/guide5.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

---

### Uninstalling Meddicc Score

Navigate to **Settings > Integrations > Connected Apps** in HubSpot to uninstall Meddicc Score without impacting your HubSpot data.

![Uninstall](../../assets/images/guide6.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

---

### Troubleshooting

#### I cannot see Score as a custom variable / The Score in HubSpot is not updated automatically

To enable this, you may need to reauthorize the app for the new permits required. Please click here

<a href="{{ site.pwalink }}" target="_blank">![Install](../../assets/images/installBtn.png)</a>

You may also need before that, to have permits to add new properties (or someone else who has authorized the app with permits).

![troubleshooting](../../assets/images/trouble1.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

It would be possible also to create the variable manually. It can be done in Settings:

![troubleshooting](../../assets/images/trouble12.png){: .my-5 .border .border-3 .border-primary .rounded .rounded-3}

It is very important to make it work that:

- the internal name be exactly "score_meddicc"
- Object type is "Deal"
- Group is "Deal information"

![troubleshooting](../../assets/images/trouble2.png){: .my-5 .w-50 .border .border-3 .border-primary .rounded .rounded-3}

#### The AI Autofill is not taking information from my Emails

To enable this, you may need to reauthorize the app for the new permits required (access to read emails basically). Please click here:

<a href="{{ site.pwalink }}" target="_blank">![Install](../../assets/images/installBtn.png){: .w-10}
</a>

In all cases, the information extracted from emails is limited to the initial portion of each email. This helps avoid processing repetitive long threads, legal disclaimers, and other non-essential content. However, if critical Deal information is buried deep within the email threads or other engagements, the AI might not capture or interpret it accurately.

#### How can add a discount code

On the checkout Stripe page, there is a button 'Add Code' where you can add yu discount code. The price will be automatically updated. If you face any problem or the code not longer works, please [Contact Us]("{{ site.email }}"):
