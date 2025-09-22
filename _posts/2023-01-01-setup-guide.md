---
layout: single
title: "Meddicc Score HubSpot Guide"
categories: blog
tags:
  - setup guide
classes: wide no_padding_top
date: 2023-01-01 16:54:38 +0100
excerpt: Guide for installing and using Meddicc Score in HubSpot
sidebar_resume: true
header:
  overlay_image: /assets/images/zermatt.jpg
  teaser: /assets/images/zermatt.jpg
  caption:
  video:
    side: true
    id: "86ba7d2367064a80aa9f233190c3f89f?sid=3f8dc7d0-397e-4b72-909b-be3331e82590&hideEmbedTopBar=true&muted=true&autoplay=false&hide_speed=true&t=68"
    provider: "loom"
---

<div id="accordionExample" class="accordion">
<div class="accordion-item">

<h3 class="accordion-header">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInstalling" aria-expanded="true" aria-controls="collapseInstalling"><span id="start" class="pt-6-m">Getting Started</span>
</button></h3>

<div class="accordion-collapse collapse" id="collapseInstalling" data-bs-parent="#accordionExample">
<div class="accordion-body">
<h4 class="pt-6-m mb-3 text-primary" id="connect-your-hubspot-account">1. Connect Your HubSpot Account</h4>

<p>Click the <strong>Install app</strong> button below to link your HubSpot account.</p>

<p class="text-center"><a href="{{ site.pwalink }}" target="_blank" class="w-50"><img src="../../assets/images/installBtn.png" alt="Install"></a></p>

<p>You may need to grant permission to the user to install external apps. <a href="#cannot-install-app">See below</a>.</p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="login-to-your-hubspot-account">2. Login to Your HubSpot Account</h4>

<p>Simply use your standard HubSpot login credentials.</p>

<p class="text-center"><img src="../../assets/images/guide1.png" alt="Login" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="select-your-hubspot-account">3. Select Your HubSpot Account</h4>

<p>If you have multiple accounts, select the one you wish to use. Single accounts will be chosen automatically.</p>

<p class="text-center"><img src="../../assets/images/guide2.png" alt="Account" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="confirm-permissions">4. Confirm Permissions</h4>

<p>Approve the necessary permissions for Meddicc Score to interface with your HubSpot CRM and click on “Connect app”. Congratulations, you have installed Meddicc Score. </p>
<p>The first user of the account is the Admin by default, but there can be more users on the same account.</p>

<p class="text-center"><img src="../../assets/images/guide21.png" alt="Permissions" class="my-3 border border-3 border-primary rounded rounded-3"></p>

</div>
</div>
</div>

<div class="accordion-item">

<h3 class="accordion-header">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUsing" aria-expanded="true" aria-controls="collapseUsing"><span id="using" class="pt-6-m">Using the APP</span>
</button></h3>

<div class="accordion-collapse collapse show" id="collapseUsing" data-bs-parent="#accordionExample">
<div class="accordion-body">

<h4 class="pt-6-m mb-3 text-primary" id="access-from-sidebar">5. Access Meddicc Score from the HubSpot Sidebar</h4>

<p>Find Meddicc Score in the HubSpot sidebar under Deal. It displays a summary of the total score and categorizes the status using three colors (red, yellow, and green) based on the completeness of each category.</p>

<p class="text-center"><img src="../../assets/images/guide3.png" alt="Access from Sidebar" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="begin-scoring">6. Begin Scoring</h4>

<ul>
  <li>The first time you access a Deal, the default framework (normally MEDDICC) is used. (The default framework can be changed in the Settings.)</li>
  <li>Meddicc Score retrieves the relevant information of the last 100 Deal Engagements (Emails, Meetings, Calls, Tasks, Notes…) recorded in HubSpot. AI analyzes this data to auto-fill responses for the Framework Questions.
Note: Comments to engagements are not gathered since they are not available through the HubSpot API.</li>
</ul>

<video autoplay loop muted playsinline controls class="img-fluid border border-3 border-primary rounded rounded-3 my-3" poster="/assets/images/poster-clip.png">
<source src="/assets/images/clip.mp4" type="video/mp4">
<source src="/assets/images/clip.webm" type="video/webm">
<img src="../../assets/images/poster-clip.png" alt="Auto fill" class="my-5 border border-3 border-primary rounded rounded-3">
</video>

<ul>
  <li>Then the AI model returns a Score based on the data introduced and feedback for every step. The responses, feedback and score are stored.</li>
  <li>Users can manually update the pre-filled responses on the form at any time. If additional information has been recorded in the Deal, they can click on "Refill" to re-populate the form with updated AI-generated responses.</li>
  <li>To prevent specific responses from being modified or overwritten during a refill, users can lock those responses by clicking the lock icon. Locked responses will remain unchanged even after a refill.</li>
  <p class="text-center"><img src="../../assets/images/guide411.png" alt="Auto scoring" class="my-3 border border-3 border-primary rounded rounded-3"></p>
  <li>Clicking on Score will trigger the AI to reassess and recalculate the Score based on updated data.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide42.png" alt="Auto scoring" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<ul>
  <li>Users can also modify the score manually by clicking the pencil icon below the score.</li>
  <li>All scores are stored in HubSpot as a property (custom variable) named “score_meddicc”.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide41.png" alt="Manual Scoring" class="w-50 my-3 mx-auto border border-3 border-primary rounded rounded-3"></p>

<ul>
  <li>Each question can include a short guidance text to help users provide better answers. By clicking the info icon, this guidance will be displayed. The text can also be customized in the Settings menu.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide421.png" alt="Guidance" class="my-3 mx-auto border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="change-framework">7. Change the Framework</h4>

<ul>
  <li>Users (if allow by Admins) can select a different qualification framework for each Deal. </li>
  <li>AI will prepopulate the selected framework with relevant information from the Deal.</li>
  <li>However, switching frameworks will not automatically recalculate the score nor save the responses, ensuring that old responses remain accessible.</li>
  <li>Users can return to the previous framework at any time.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide4.png" alt="Begin Scoring" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="settings">8. Settings  (only Admin)</h4>

<ul>
  <li>Only Admins can access this feature. This will get access to customize the experience of Meddicc Score. It is organized in three sections: General settings, Framework (to modify the questions) and Users (to manage user access and licences)</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide9.png" alt="Editing" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<h5 class="pt-6-m mb-3 text-primary" id="settings-general">8.1 General Settings:</h5>

<p class="text-center"><img src="../../assets/images/guide81.png" alt="Editing" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<p><strong>8.1.1 Users access:</strong></p>

<ul>
  <li><strong>Change Framework:</strong> Allows non-admin users to switch between different sales qualification frameworks (e.g., MEDDICC, BANT).</li>
  <li><strong>Change Score Manually:</strong> Enables non-admin users to manually adjust the scores assigned to deals or opportunities.</li>
  <li><strong>Access Report:</strong> Grants access to non-admin user to a detailed report summarizing deal scoring.</li>
</ul>

<p class="pt-6-m" id="automations"><strong>8.1.2 Automations:</strong></p>

<ul>
  <li>Automations help you streamline and automate the scoring process. They are only available for Premium users.</li>
  <li>
    <strong>Automatic Scoring:</strong> When enabled, this feature sets up a workflow so that every time a new engagement (Note, Meeting, Task, or Call) is logged in HubSpot, the Meddicc Score form is automatically re-filled with the latest information and rescored. Locked fields will not be changed, but unlocked fields and the overall score may be updated. Please note the following limitations due to the HubSpot API:
    <ul>
      <li>The Meddicc Card in the sidebar will not refresh automatically; it updates only when the entire deal is refreshed.</li>
      <li>Automatic scoring is not triggered if an engagement is updated from a previous engagement already created.</li>
      <li>Automatic scoring does not trigger for new emails; it works only for Meetings, Calls, Tasks, or Notes.</li>
    </ul>
  </li>
  <li>
    <strong>Score Account:</strong> This option will trigger scoring for <b>all deals*</b> in your account. <b>All previous information and scores will be overwritten, and this action cannot be undone.</b> The process may take several minutes, and the Admin user will receive an email notification once it is complete. <br>
      * Limited to the last 2000 Deals created that are not closed yet. If you need more, please <a href="mailto:meddiccscore@gmail.com">contact support</a>.
  </li>
</ul>

<p class="pt-6-m" id="scoring_methodology"><strong>8.1.3 Scoring Methodology:</strong></p>

<ul>
  <li>Score of the forms go from 0 to 100. There are two options for Scoring the forms.</li>
  <li>
    <strong>All the form together (default):</strong> When enabled, the entire form is evaluated by the selected AI LLM model, which generates a score based on the overall responses within the sales qualification framework and assesses the likelihood of successfully closing the deal. Please note that results may vary depending on the chosen model and the specific evaluation, and may sometimes be subject to interpretation or appear optimistic in nature.
  </li>
  <li>
    <strong>By section:</strong> With this option, each section of the form (e.g., Metrics, Economic Buyer, etc.) is scored as either bad (0), medium (0.5), or good (1). The individual section scores are then summed, divided by the total number of sections, and multiplied by 100 to produce a final score between 0 and 100. This method provides more predictable and consistent results, though it may also lead to more repetitive scoring patterns.
  </li>
</ul>

<p class="pt-6-m" id="selectLLM"><strong>8.1.4 AI LLM Model Provider:</strong></p>

<ul>
  <li>
    This allows the user to select the Large Language Model (AI) provider used on the app, to pre-fill the forms and score the framework. The data will be shared with that provider, so please take into account their privacy policies, <a href="/privacy/#information-collected-but-not-stored-used-in-the-llm" >see more information here.</a>
  </li>
    <li>
      Every model comes with its own strengths in terms of capabilities, latency/speed, and intelligence. We encourage you to try different options and choose the one that best fits your needs for both quality and performance. If there’s a specific model you’d like us to add, please reach out to our <a href="mailto:meddiccscore@gmail.com">support team</a>.
    <p class="text-center"><img src="../../assets/images/guide811.png" alt="Editing" class="my-3 w-50 border border-3 border-primary rounded rounded-3"></p>
  </li>
  <li>
    <strong>Available providers:</strong>
    <ul>
      <li><strong>OpenAI / GPT 4.1  (default): </strong><a href="https://platform.openai.com/docs/models/gpt-4.1" target="_blank">more information on model capabilities ↗</a></li>
      <li><strong>Google / Gemini 2.5:</strong> <a href="https://deepmind.google/models/gemini/" target="_blank">more information on model capabilities ↗</a></li>
      <li><strong>Anthropic / Sonnet 4:</strong> <a href="https://www.anthropic.com/claude/sonnet" target="_blank">more information on model capabilities ↗</a></li>
      <li><strong>Meta / Llama 4:</strong> <a href="https://www.llama.com/models/llama-4/" target="_blank">more information on model capabilities ↗</a>. Meta Llama is provided by Groq: <a href="https://groq.com/about-us" target="_blank">more information  ↗</a></li>
      <li><strong>OpenAI / GPT OSS:</strong> <a href="https://platform.openai.com/docs/models/gpt-oss-120b" target="_blank">more information on model capabilities ↗</a>. GPT OSS is provided by Groq: <a href="https://groq.com/about-us" target="_blank">more information  ↗</a></li>
      <li><strong>Azure OpenAI / GPT 4.1:</strong> Microsoft Azure enables the use of OpenAI models (along with others) in a private, secure, enterprise-grade deployment, guaranteeing full data privacy (according to their claims). This allows organizations to leverage the latest OpenAI models without explicitly sharing their information with OpenAI.<a href="https://azure.microsoft.com/en-us/products/ai-foundry/models/openai/" target="_blank">more information on Azure ↗</a>. For this to work, more information is required:
      <ul>
        <li>Resource name: The calls to the API will follow this URL https://{resourceName}.openai.azure.com/openai/v1{path}</li>
        <li>Base URL: Instead of Resource name, the Base URL can be provided. The calls to the API will follow this URL {baseURL}/v1{path}</li>
        <li>Api Key: Although the key is safely stored and encrypted, It is recommended to provide an exclusive Api Key for Meddicc Score and set limits of usage.</li>
      </ul>
          <p class="text-center"><img src="../../assets/images/guide812.png" alt="Editing" class="my-3 w-50 border border-3 border-primary rounded rounded-3"></p>
      </li>
    </ul>
  </li>
</ul>

<table style="width:100%; border-collapse:collapse; font-family:system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; font-size:14px;">
  <caption style="caption-side:top; text-align:left; font-weight:600; padding:8px 0;">
    Model Performance Comparison (General Overview)
  </caption>
  <thead>
    <tr style="background:#f5f6f7;">
      <th style="text-align:left; padding:10px; border:1px solid #e5e7eb;">Provider / Model</th>
      <th style="text-align:left; padding:10px; border:1px solid #e5e7eb;">Speed (Latency &amp; Throughput)</th>
      <th style="text-align:left; padding:10px; border:1px solid #e5e7eb;">Intelligence (Reasoning &amp; Output Quality)</th>
      <th style="text-align:left; padding:10px; border:1px solid #e5e7eb;">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:10px; border:1px solid #e5e7eb;"><strong>OpenAI GPT-4.1 (Direct API)</strong></td>
      <td style="padding:10px; border:1px solid #e5e7eb;">⚡⚡ (fast; depends on load)</td>
      <td style="padding:10px; border:1px solid #e5e7eb;">🧠🧠🧠🧠 (excellent reasoning, creative and reliable)</td>
      <td style="padding:10px; border:1px solid #e5e7eb;">Strong balance of speed and intelligence; widely adopted.</td>
    </tr>
    <tr>
      <td style="padding:10px; border:1px solid #e5e7eb;"><strong>OpenAI GPT-4.1 (Azure OpenAI)</strong></td>
      <td style="padding:10px; border:1px solid #e5e7eb;">⚡⚡⚡ (enterprise-grade stability)</td>
      <td style="padding:10px; border:1px solid #e5e7eb;">🧠🧠🧠🧠 (same model quality as direct API)</td>
      <td style="padding:10px; border:1px solid #e5e7eb;">Often steadier latency due to Microsoft infrastructure.</td>
    </tr>
    <tr>
      <td style="padding:10px; border:1px solid #e5e7eb;"><strong>Google Gemini (Pro / Ultra)</strong></td>
      <td style="padding:10px; border:1px solid #e5e7eb;">⚡ (slower than the rest)</td>
      <td style="padding:10px; border:1px solid #e5e7eb;">🧠🧠🧠🧠🧠 (very strong reasoning, multimodal)</td>
      <td style="padding:10px; border:1px solid #e5e7eb;">Excels at complex reasoning &amp; and more verbose.</td>
    </tr>
    <tr>
      <td style="padding:10px; border:1px solid #e5e7eb;"><strong>Anthropic Claude (Sonnet / Opus)</strong></td>
      <td style="padding:10px; border:1px solid #e5e7eb;">⚡⚡ (good, especially with long contexts)</td>
      <td style="padding:10px; border:1px solid #e5e7eb;">🧠🧠🧠🧠 (strong reasoning; alignment-focused)</td>
      <td style="padding:10px; border:1px solid #e5e7eb;">Handles long contexts well; polished, safe outputs.</td>
    </tr>
    <tr>
      <td style="padding:10px; border:1px solid #e5e7eb;"><strong>Meta Llama (via Groq)</strong></td>
      <td style="padding:10px; border:1px solid #e5e7eb;">⚡⚡⚡⚡ (ultra-low latency on Groq)</td>
      <td style="padding:10px; border:1px solid #e5e7eb;">🧠🧠🧠 (solid; generally below GPT-4/Gemini for reasoning)</td>
      <td style="padding:10px; border:1px solid #e5e7eb;">Best when speed is critical; slightly weaker reasoning depth.</td>
    </tr>
        <tr>
      <td style="padding:10px; border:1px solid #e5e7eb;"><strong>GPT OSS (via Groq)</strong></td>
      <td style="padding:10px; border:1px solid #e5e7eb;">⚡⚡⚡⚡ (extremely fast; Groq hardware optimized for OSS models)</td>
      <td style="padding:10px; border:1px solid #e5e7eb;">🧠🧠🧠🧠 (similar or better than GPT 4.1)</td>
      <td style="padding:10px; border:1px solid #e5e7eb;">Good combination of speed and reasoning.</td>
    </tr>
  </tbody>
</table>

<p style="margin-top:8px; font-size:12px; color:#6b7280;">
  <strong>Legend:</strong> ⚡ = relative speed; 🧠 = relative intelligence.<br>
  <strong>Disclaimer:</strong> This is a generalized, high-level comparison (as of 2025). Actual performance varies by model version, prompt, context length, provider load, and infrastructure.
</p>

<!-- <h4 class="pt-6-m mb-3 text-primary" id="selectLLM">TODO</h4> -->

<p ><strong>8.1.5 Manage your Subscription and account:</strong></p>
<ul>
  <li><strong>Upgrade (Free users only):</strong> Upgrade your account to access premium features.</li>
  <li><strong>Manage Subscription (Admin, paid users only):</strong> Opens the Customer Portal to update or cancel your subscription. For Corporate subscriptions, contact support by email. <a href="#how-can-cancell-or-manage-my-subcription">More information.</a></li>
  <li><strong>Delete Account:</strong> Permanently deletes all MeddiccScore data (not your HubSpot account), including deals, users, and account information. This action cannot be undone. Please <a href="#how-can-cancell-or-manage-my-subcription">cancel any paid subscription</a> before deleting your account. Type "Delete Account" to confirm.</li>
</ul>

<!-- <h4 class="pt-6-m mb-3 text-primary" id="automations">10. Automations (Only Premium Admins)</h4> -->

<hr>

<h5 class="pt-6-m mb-3 text-primary mt-2" id="editing-questions">8.2 Frameworks: Editing the framework questions and default framework (only Admin)</h5>

<ul>
  <li>Only Admins can access this feature. Clicking on the Framework tab, allows the user to edit the questions and the guidance for that framework. The change will apply to all account members (not just the individual user). The modification will not affect the answers or scores previously submitted but will update the questions and guidance for all deals where that framework has been used.</li>
  <li>Turning on the ‘Default Framework’ switch will set the selected framework as the default for the entire account. Every new deal will use this framework by default. The change will not affect the answers or frameworks previously submitted in existing deals. The default framework is initially set to MEDDICC.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide10.png" alt="Editing" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<ul>
  <li>You can add more questions to any category of the framework. When you hover over the bottom of a question, a bar with “+” and “–” icons will appear, allowing you to add a new question or remove the existing one.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide101.png" alt="Adding questions" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h5 class="pt-6-m mb-3 text-primary mt-2" id="manage-account">8.3. Users: Manage your users (only Admin)</h5>

<ul>
  <li>Clicking on the "Users" tab displays a list of current users who have installed MeddiccScore.</li>
    <li>In the right column of the list, three actions are available only to the Admin users:
    <ul>
      <li><strong>Upgrade/Downgrade:</strong> Change the user's status to Premium or Free. This action either assigns or frees up a license. If no licenses are available, additional licenses can be purchased, or the account can be upgraded to the Team plan.</li>
      <li><strong>Delete:</strong> Marks the user for deletion. Once deleted, the user will need to reinstall MeddiccScore to regain access.</li>
      <li><strong>Make Admin:</strong> Assigns administrative privileges to the selected user, granting them access to manage account settings and users. There can be more than one Admin, but at least one.</li>
      <li><strong>Remove Admin:</strong> Remove administrative privileges to the selected user. There has to be at least one Admin user.</li>
    </ul>
  </li>
</ul>

<p class="text-center"><img src="../../assets/images/guide91.png" alt="Editing" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="report-and-export">9. Report and Export</h4>

<ul>
  <li>Clicking on Report, a full account pipeline summary can be found.</li>
  <li>It includes a  Bubble Quadrant Graph, which displays the current year’s opportunities with their Score, Close Date, and Amount represented by the bubble size. It will only shows deals that have Close Date and Amount recorded.</li>
  <li>From the report is possible to download a CSV with all the notes and scores saved.</li>
  <li>It is also possible to download the report on PDF format.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide8.png" alt="Reporting" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<ul>
  <li>The Score is also available as a custom HubSpot property (score_meddicc), and can be used in reporting, columns, etc.</li>
</ul>

<p class="text-center"><img src="../../assets/images/features4.png" alt="Reporting" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="upgrade-to-premium">10. Upgrade to Premium</h4>

<p>If you like Meddicc Score and want to use it for more than 5 deals, you can upgrade easily from the own app. Click on “Upgrade Now” and you will go to a checkout powered by Stripe.</p>

<p class="text-center"><img src="../../assets/images/guide5.png" alt="Ugrade" class="my-3 border border-3 border-primary rounded rounded-3"></p>
<hr>

<h4 class="pt-6-m mb-3 text-primary" id="changeplan">11. Change the subscription plan or billing details.</h4>

<p>If you're already enjoying the premium benefits of Meddicc Score but want to upgrade to a Team plan or switch to a yearly subscription to unlock significant savings, you can easily make the change through the Customer Portal. Take advantage of these exclusive discounts today and maximize your Meddicc Score experience!</p>

<p class="text-center"><img src="../../assets/images/trouble5.png" alt="troubleshooting" class="mt-5 w-50 border border-3 border-primary rounded rounded-3"></p>

<p>You can also change your billing details by clicking on "Update Subscription".</p>

<p class="text-center"><img src="../../assets/images/guide51.png" alt="Ugrade" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<p class="text-center"><img src="../../assets/images/guide52.png" alt="Ugrade" class="my-3 border border-3 border-primary rounded rounded-3"></p>
</div>
</div>
</div>

<div class="accordion-item">

<h3 class="accordion-header">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUninstall" aria-expanded="true" aria-controls="collapseUninstall"><span id="uninstalling" class="pt-6-m">Uninstalling the APP</span>
</button></h3>

<div class="accordion-collapse collapse" id="collapseUninstall" data-bs-parent="#accordionExample">
<div class="accordion-body">

<p>If you are a paid or premium user, you  need to cancel your subcription before uninstalling, by visiting the Customer Portal. <a href="#how-can-cancell-or-manage-my-subcription">More information.</a></p>

<p>Additionally, you may want to delete all the data stored in MeddiccScore, including users and account information, before uninstalling. <a href="#manage-account">More information.</a> If you plan to reinstall the app later, the data will reappear unless the account has been deleted beforehand.</p>

<p>To uninstall, navigate to <strong>Settings &gt; Integrations &gt; Connected Apps</strong>. Click in Actions and then "Uninstall". This will uninstall Meddicc Score without impacting your HubSpot data.</p>

<p class="text-center"><img src="../../assets/images/guide6.png" alt="Uninstall" class="my-3 border border-3 border-primary rounded rounded-3"></p>

</div>
</div>
</div>

<div class="accordion-item">

<h3 class="accordion-header">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTrouble" aria-expanded="true" aria-controls="collapseTrouble"><span id="troubleshooting" class="pt-6-m">Troubleshooting</span>
</button></h3>

<div class="accordion-collapse collapse show" id="collapseTrouble" data-bs-parent="#accordionExample">
<div class="accordion-body">

<h4 id="cannot-install-app" class="pt-6-m mb-3 text-primary">I cannot install the APP<a class="header-link" href="#cannot-install-app" title="Permalink"><span class="sr-only">Permalink</span><i class="fas fa-link"></i></a></h4>

<p>Please check that the user have permits to install external APPs from the marketplace.</p>

<p class="text-center"><img src="../../assets/images/trouble13.png" alt="troubleshooting" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<p>For more information on user permissions, visit the <a href="https://knowledge.hubspot.com/user-management/hubspot-user-permissions-guide?#account" target="_blank">HubSpot User Permissions Guide</a>.</p>

<hr>

<h4 id="i-cannot-see-score-as-a-custom-variable--the-score-in-hubspot-is-not-updated-automatically" class="pt-6-m mb-3 text-primary">I cannot see Score as a property / The Score property in HubSpot is not updated automatically<a class="header-link" href="#i-cannot-see-score-as-a-custom-variable--the-score-in-hubspot-is-not-updated-automatically" title="Permalink"><span class="sr-only">Permalink</span></a></h4>

<p>To enable this, you may need to reauthorize the app for the new permits required. Please click here</p>

<p class="text-center"><a href="{{ site.pwalink }}" target="_blank"><img src="../../assets/images/installBtn.png" alt="Install"></a></p>

<p>You may also need before that, to have permits to add new properties (or someone else who has authorized the app with all the permits). Partner accounts with permits may be not enough. For reference, the Scope requiered is "crm.pipelines.orders.write".</p>

<p class="text-center"><img src="../../assets/images/trouble1.png" alt="troubleshooting" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<p>If does not work even after re-installation, then user needs to <i>create the variable manually</i>. It can be done in <strong>Settings > Data Management > Properties > Create property</strong>:</p>

<p class="text-center"><img src="../../assets/images/trouble12.png" alt="troubleshooting" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<p>It is very important to make it work that:</p>

<ul>
  <li>The internal name be exactly “score_meddicc”</li>
  <li>Object type is “Deal”</li>
  <li>Group is “Deal information”</li>
  <li>The property label “Score” (but it can be different)</li>
</ul>

<p class="text-center"><img src="../../assets/images/trouble2.png" alt="troubleshooting" class="my-3 w-50 border border-3 border-primary rounded rounded-3"></p>

<ul>
  <li>"Field type": # Number</li>
  <li>"Number format": Formatted number</li>
</ul>

<p class="text-center"><img src="../../assets/images/trouble21.png" alt="troubleshooting" class="my-3 w-50 border border-3 border-primary rounded rounded-3"></p>

<p>These are optional but recommended for validation:</p>
<ul>
  <li>"Set min value limit": 0</li>
  <li>"Set max value limit": 100</li>
  <li>"Set max number of decimal places": 0</li>
</ul>

<p class="text-center"><img src="../../assets/images/trouble22.png" alt="troubleshooting" class="my-3 w-50 border border-3 border-primary rounded rounded-3"></p>

<hr>
<h4 id="the-ai-autofill-is-not-taking-information-from-my-emails" class="pt-6-m mb-3 text-primary">The AI Autofill is not taking information from my Emails<a class="header-link" href="#the-ai-autofill-is-not-taking-information-from-my-emails" title="Permalink"><span class="sr-only">Permalink</span><i class="fas fa-link"></i></a></h4>

<p>To enable this, you may need to reauthorize the app for the new permits required (access to read emails basically). Please click here:</p>

<p class="text-center"><a href="{{ site.pwalink }}" alt="Install" class="w-10">
<img src="../../assets/images/installBtn.png" alt="Install"></a></p>

<p>In all cases, the information extracted from emails is limited to the initial portion of each email. This helps avoid processing repetitive long threads, legal disclaimers, and other non-essential content. However, if critical Deal information is buried deep within the email threads or other engagements, the AI might not capture or interpret it accurately. Also AI tends to allucinate sometimes, please check important facts.</p>

<hr>
<h4 id="stage-report" class="pt-6-m mb-3 text-primary">The Stage is not correct on the report<a class="header-link" href="#stage-report" title="Permalink"><span class="sr-only">Permalink</span><i class="fas fa-link"></i></a></h4>

<p>The Stage property in HubSpot can be modified. Ensure that the internal name for lost opportunities includes the string "lost" and for won opportunities, it includes the string "won". Note that sometimes the internal name might be a number, which is the standard when the stage is created.</p>

<p class="text-center"><img src="../../assets/images/trouble7.png" alt="troubleshooting" class="mt-5 w-50 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 id="how-can-add-a-discount-code" class="pt-6-m mb-3 text-primary">How can add a discount code<a class="header-link" href="#how-can-add-a-discount-code" title="Permalink"><span class="sr-only">Permalink</span><i class="fas fa-link"></i></a></h4>

<p>On the checkout Stripe page, there is a button ‘Add Code’ where you can add yu discount code. The price will be automatically updated. If you face any problem or the code not longer works, please <a href="mailto:meddiccscore@gmail.com">Contact Us</a>:</p>

<p class="text-center"><img src="../../assets/images/trouble4.png" alt="troubleshooting" class="mt-5 w-50 border border-3 border-primary rounded rounded-3"></p>

<p class="text-center"><img src="../../assets/images/trouble3.png" alt="troubleshooting" class="mb-3 w-50 border border-3 border-primary rounded rounded-3"></p>

<p>If you already have a subscription and want to add a coupon code, it cannot be done automatically, please <a href="mailto:meddiccscore@gmail.com">Contact Us</a></p>

<hr>

<h4 id="how-can-cancell-or-manage-my-subcription" class="pt-6-m mb-3 text-primary">How can I cancel or manage my subscription?<a class="header-link" href="#how-can-cancell-or-manage-my-subcription" title="Permalink"><span class="sr-only">Permalink</span><i class="fas fa-link"></i></a></h4>

<p>If you want to cancel your subscription or change the invoice details, you can access the Customer Portal (or send and email to Support) by clicking on “Subscription” button inside the settings. (Only admin users)</p>
<p>Please cancel your subscription BEFORE uninstalling the APP, since the latter does not automatically cancel de subcription. (this is a HubSpot limitation)</p>

<p class="text-center"><img src="../../assets/images/trouble5.png" alt="troubleshooting" class="mt-5 w-50 border border-3 border-primary rounded rounded-3"></p>

<p class="text-center"><img src="../../assets/images/trouble6.png" alt="troubleshooting" class="mb-5 border border-3 border-primary rounded rounded-3"></p>

</div>
</div>
</div>
</div>
