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
  <li>Users can manually update the pre-filled responses on the form at any time. Additionally, they can re-populate the form with AI by clicking on "Refill", for instance, if more information has been recorded on the Deal.</li>
  <li>Clicking on Score will trigger the AI to reassess and recalculate the Score based on updated data.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide42.png" alt="Auto scoring" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<ul>
  <li>Users can also modify the score manually by clicking the pencil icon below the score.</li>
  <li>All scores are stored in HubSpot as a property (custom variable) named “score_meddicc”.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide41.png" alt="Manual Scoring" class="w-50 my-3 mx-auto border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="change-framework">7. Change the Framework</h4>

<ul>
  <li>Users can select a different qualification framework for each Deal.</li>
  <li>AI will prepopulate the selected framework with relevant information from the Deal.</li>
  <li>However, switching frameworks will not automatically recalculate the score nor save the responses, ensuring that old responses remain accessible.</li>
  <li>Users can return to the previous framework at any time.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide4.png" alt="Begin Scoring" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="editing-questions">8. Settings: Editing the framework questions and default framework (only Admin)</h4>

<ul>
  <li>Only Admins can access this feature. Clicking the Settings buttons, on the Framework tab, allows the user to edit the questions for that framework. The change will apply to all account members (not just the individual user). The modification will not affect the answers or scores previously submitted but will update the questions for all deals where that framework has been used.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide9.png" alt="Editing" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<ul>
  <li>Turning on the ‘Default Framework’ switch will set the selected framework as the default for the entire account. Every new deal will use this framework by default. The change will not affect the answers or frameworks previously submitted in existing deals. The default framework is initially set to MEDDICC.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide10.png" alt="Editing" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="manage-account">9. Settings: Manage your account and users (only Admin)</h4>

<ul>
  <li>Clicking on the "Account" tab displays a list of current users who have installed MeddiccScore.</li>
  <li>In the right column of the list, two actions are available only to the Admin user:
    <ul>
      <li><strong>Delete:</strong> Marks the user for deletion. The user will need to reinstall MeddiccScore to continue using it.</li>
      <li><strong>Make Admin:</strong> Grants administration privileges to a new user.</li>
    </ul>
  </li>
</ul>

<p class="text-center"><img src="../../assets/images/guide91.png" alt="Editing" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<ul>
  <li>On the right side, there are different options:
    <ul>
      <li><strong>Upgrade (only for Free users):</strong> Upgrade to premium plans.</li>
      <li><strong>Manage Subscription (only for Admin paid users):</strong> Redirects to the Customer Portal where the user can update or cancel your paid subscription, or send a email to support is your subcription is Corporate. <a href="#how-can-cancell-or-manage-my-subcription">More information.</a></li>
      <li><strong>Delete Account:</strong> Permanently deletes all MeddiccScore information (NOT the HubSpot Account) including deals, users, and account data. This action is irreversible, so be sure before proceeding. Please <a href="#how-can-cancell-or-manage-my-subcription">cancel your paid subscription</a> (if any) before deleting the account. Type "Delete Account" to confirm.</li>
    </ul>
  </li>
</ul>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="report-and-export">10. Report and Export</h4>

<ul>
  <li>Clicking on Report, a full account pipeline summary can be found.</li>
  <li>It includes a  Bubble Quadrant Graph, which displays the current year’s opportunities with their Score, Close Date, and Amount represented by the bubble size. It will only shows deals that have Close Date and Amount recorded.</li>
  <li>From the report is possible to download a CSV with all the notes and scores saved.</li>
  <li>It is also possible to download the report on PDF format.</li>
</ul>

<p class="text-center"><img src="../../assets/images/guide8.png" alt="Reporting" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<ul>
  <li>The Score is also available as a custom Hubspot property (score_meddicc), and can be used in reporting, columns, etc.</li>
</ul>

<p class="text-center"><img src="../../assets/images/features4.png" alt="Reporting" class="my-3 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="upgrade-to-premium">11. Upgrade to Premium</h4>

<p>If you like Meddicc Score and want to use it for more than 5 deals, you can upgrade easily from the own app. Click on “Upgrade Now” and you will go to a checkout powered by Stripe.</p>

<p class="text-center"><img src="../../assets/images/guide5.png" alt="Ugrade" class="my-3 border border-3 border-primary rounded rounded-3"></p>

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
<p>Please cancell your subscription BEFORE uninstalling the APP, since the latter does not automatically cancel de subcription. (this is a HubSpot limitation)</p>

<p class="text-center"><img src="../../assets/images/trouble5.png" alt="troubleshooting" class="mt-5 w-50 border border-3 border-primary rounded rounded-3"></p>

<p class="text-center"><img src="../../assets/images/trouble6.png" alt="troubleshooting" class="mb-5 border border-3 border-primary rounded rounded-3"></p>

</div>
</div>
</div>
</div>
