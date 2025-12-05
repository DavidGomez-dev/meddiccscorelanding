---
layout: single
title: "How to Create a Gate for Pipeline Stages with Meddicc"
categories: blog
tags:
  - HubSpot
  - sales proccess
  - revops
classes: wide
date: 2023-01-03 12:01:51 +0100
excerpt: Learn how to make MEDDICC part of your HubSpot pipeline by requiring SDRs to complete a Meddicc Score before advancing deals in the pipeline. ...
header:
  overlay_image: /assets/images/guides/1/herov2.webp
  teaser: /assets/images/guides/1/herov2.webp
  caption:
---

<div class="mb-5 mt-0">
<div style="position: relative; padding-bottom: 60.70826306913997%; height: 0;"><iframe src="https://www.loom.com/embed/8b653afa91044abe9ef7e6945b802b82?sid=d897513b-e5f0-4e4e-bd94-16d28644682f" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
</div>

# 🔒 How to Create a Gate for Pipeline Stages with Meddicc in Hubspot

In many sales teams, SDRs hand over deals to Account Executives too early — often before properly qualifying them.  
The result? Wasted pipeline, lost time, and frustrated AEs.

That’s where **HubSpot pipeline stage rules** come in handy — and when combined with the **Meddicc Score app**, you can make sure every deal is scored before moving to the next stage.

In this quick guide, we’ll show you how to create a **stage gate** that _forces SDRs to complete the Meddicc Score before moving a deal from “Appointment Scheduled” to “Qualified To Buy.”_

---

## 🧭 Step 1: Open Your Deal Pipeline Settings

Head to your HubSpot account and click the **⚙️ Settings** icon in the top right corner.  
Then follow this path:

**Data Management → Objects → Deals → Pipelines**

Select your active **Sales Pipeline** from the dropdown menu.  
You’ll now see all the stages of your sales process.

![Example Deal](/assets/images/guides/1/0.png)

![HubSpot pipeline setup showing stages list](/assets/images/guides/1/1.png)

---

## ⚙️ Step 2: Edit the “Qualified To Buy” Stage

Find the stage that you want to prevent to be selected if the MEDDICC score is not set, in this case as example, we will select **Qualified To Buy** stage.  
Click **Edit properties** next to it.

![HubSpot “Edit properties” button highlighted](/assets/images/guides/1/2.png)

---

## 🧩 Step 3: Add Conditional Logic to Require Meddicc Score

Click **Edit property logic**.  
Here’s where you define the rule that controls what’s required when a deal enters this stage.

1. Under **Controlling Property**, select **Deal Stage**.
2. Set the condition to:  
   **Deal Stage → Equal to → Qualified To Buy**
3. Under **Dependent Properties**, click **+ Add dependent property**.
4. Search for **Score Meddicc** and select it.

![Selecting Score Meddicc as dependent property](/assets/images/guides/1/3.png)

---

## ✅ Step 4: Make It a Required Field

Now check the box that says **Required** next to **Score Meddicc**.  
Click **Apply logic**, and then hit **Save** on your pipeline configuration.

From now on, whenever a deal moves into _Qualified To Buy_, HubSpot will require a Meddicc Score.

![Required checkbox enabled](/assets/images/guides/1/4.png)

## ![Save button highlighted](/assets/images/guides/1/5.png)

## 🧠 Step 5: Test It Out

Go to any active deal in your CRM.  
Try changing the **Stage** from _Appointment Scheduled_ to _Qualified To Buy._

A pop-up will now appear asking for the **Score Meddicc** before you can proceed.  
This ensures SDRs must complete their qualification using the Meddicc Score app.

![Popup showing Score Meddicc required before saving](/assets/images/guides/1/6.png)

![Popup showing Score Meddicc required before saving](/assets/images/guides/1/7.png)

---

## 📊 Step 6: Update the Score Using Meddicc Score App

Add your Deal information as always, for instance a note. In the deal view, open the **Meddicc Score** panel on the right and click **Update Score**.  
Answer the MEDDICC questions — Metrics, Economic Buyer, Pain, Decision Process, etc.  
Once saved, your deal will display a **Score out of 100**.

![Adding a note](/assets/images/guides/1/8.png)

![Meddicc Score modal showing score 70/100 and metrics](/assets/images/guides/1/9.png)

---

## 🎯 The Result

From now on, your SDRs won’t be able to pass a deal forward unless it’s been qualified using MEDDICC.  
This gives you:

- ✅ Consistent deal qualification
- 📈 Cleaner, more predictable pipelines
- 🤝 A smoother handoff between SDRs and AEs
- 🔮 Better forecasting accuracy

![Deal record view showing Meddicc Score filled and Qualified stage](/assets/images/guides/1/10.png)

![Deal record view showing Meddicc Score filled and Qualified stage](/assets/images/guides/1/11.png)

---

## 💡 Bonus Tip

You can apply the same idea to other stages. For example:

- Require **Champion** and **Decision Process** fields before _Contract Sent_.
- Also you can restrict deals from skippng stages on **Pipelines Rules**

![Deal record view showing Meddicc Score filled and Qualified stage](/assets/images/guides/1/12.png)

This turns your MEDDICC framework into a living part of your CRM — not just a checklist on paper.

---

## 🚀 Final Thoughts

By integrating Meddicc Score directly into your HubSpot pipeline logic, you’re not only enforcing better sales discipline — you’re empowering your team to **sell smarter, qualify faster, and close stronger**.

If you haven’t installed **Meddicc Score for HubSpot** yet, you can grab it from the [HubSpot Marketplace →](https://app-eu1.hubspot.com/l/ecosystem/marketplace/apps/meddicc-score)

---

_Written by David Gomez , founder of Meddicc Score and Sailes Coach AI._
