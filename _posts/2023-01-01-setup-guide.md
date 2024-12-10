---
layout: single
title: "Meddicc Score HubSpot Guide"
categories: blog
tags:
  - setup guide
classes: wide
date: 2023-01-01 16:54:38 +0100
excerpt: Guide for installing and using Meddicc Score in HubSpot
header:
  overlay_image: /assets/images/imagesocial.png
  teaser: /assets/images/imagesocial.png
  caption:
---

<div class="w-50">
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
<iframe class="video-poster" src="https://www.loom.com/embed/86ba7d2367064a80aa9f233190c3f89f?sid=3f8dc7d0-397e-4b72-909b-be3331e82590&hideEmbedTopBar=true&muted=true&autoplay=false&hide_speed=true&t=68" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
</iframe>
</div>
</div>
<h3 id="getting-started" data-bs-toggle="collapse" href="#collapseInstalling" role="button" aria-expanded="false" aria-controls="collapseInstalling">Getting Started <i class="bi bi-chevron-down"></i><a class="header-link" href="#getting-started" title="Permalink"><span class="sr-only">Permalink</span></a></h3>

<div class="collapse" id="collapseInstalling">

<h4 class="mt-5 mb-3 text-primary">1. Connect Your HubSpot Account</h4>

<p>Click the “Install App” button to link your HubSpot account.</p>

<p><a href="{{ site.pwalink }}" target="_blank" class="w-50"><img src="../../assets/images/installBtn.png" alt="Install"></a></p>

<hr>

<h4 class="mt-5 mb-3 text-primary">2. Login to Your HubSpot Account</h4>

<p>Simply use your standard HubSpot login credentials.</p>

<p><img src="../../assets/images/guide1.png" alt="Login" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="mt-5 mb-3 text-primary">3. Select Your HubSpot Account</h4>

<p>If you have multiple accounts, select the one you wish to use. Single accounts will be chosen automatically.</p>

<p><img src="../../assets/images/guide2.png" alt="Account" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="mt-5 mb-3 text-primary">4. Confirm Permissions</h4>

<p>Approve the necessary permissions for Meddicc Score to interface with your HubSpot CRM and click on “Connect app”.</p>

<p><img src="../../assets/images/guide21.png" alt="Permissions" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<hr>

</div>

<h3 id="using-app" data-bs-toggle="collapse" href="#collapseUsing" role="button" aria-expanded="false" aria-controls="collapseUsing">Using the APP <i class="bi bi-chevron-up"></i><a class="header-link" href="#using-app" title="Permalink"><span class="sr-only">Permalink</span></a></h3>

<div class="collapse show" id="collapseUsing">

<h4 class="mt-5 mb-3 text-primary">5. Access Meddicc Score from the HubSpot Sidebar</h4>

<p>Locate Meddicc Score within the HubSpot sidebar under Deal.</p>

<p><img src="../../assets/images/guide3.png" alt="Access from Sidebar" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="mt-5 mb-3 text-primary">6. Begin Scoring</h4>

<ul>
  <li>The first time you access a Deal, the default framework (normally MEDDICC) is used. (The default framework can be changed in the Settings.)</li>
  <li>Meddicc Score retrieves the relevant information of the last 100 Deal Engagements (Emails, Meetings, Calls, Tasks, Notes…) recorded in HubSpot. AI analyzes this data to auto-fill responses for the Framework Questions.
Note: Comments to engagements are not gathered since they are not available through the HubSpot API.</li>
</ul>

<video autoplay loop muted playsinline controls class="img-fluid border border-3 border-primary rounded rounded-3" poster="/assets/images/poster-clip.png">
<source src="/assets/images/clip.mp4" type="video/mp4">
<source src="/assets/images/clip.webm" type="video/webm">
<img src="../../assets/images/poster-clip.png" alt="Auto fill" class="my-5 border border-3 border-primary rounded rounded-3">
</video>

<ul>
  <li>Then the AI model return a Score based on the data introduced and feedback for every step. The responses, feedback and score are stored.</li>
  <li>Users can manually update the pre-filled responses on the form at any time.</li>
  <li>Clicking on Score will trigger the AI to reassess and recalculate the Score based on updated data.</li>
</ul>

<p><img src="../../assets/images/guide42.png" alt="Auto scoring" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<ul>
  <li>Users can also modify the Score manually by clicking the pencil icon below the score.</li>
  <li>All scores are stored in HubSpot as a custom variable named “score_meddicc”.</li>
</ul>

<p><img src="../../assets/images/guide41.png" alt="Manual Scoring" class="w-50 my-5 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="mt-5 mb-3 text-primary">7. Change the Framework</h4>

<ul>
  <li>Users can select a different qualification framework for each Deal.</li>
  <li>AI will prepopulate the selected framework with relevant information from the Deal.</li>
  <li>However, switching frameworks will not automatically recalculate the Score, ensuring that old responses remain accessible.</li>
  <li>Users can return to the previous framework at any time.</li>
</ul>

<p><img src="../../assets/images/guide4.png" alt="Begin Scoring" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="mt-5 mb-3 text-primary">8. Settings: Editing the framework questions and default framework</h4>

<ul>
  <li>Clicking the gear icon on ‘Select Framework’ allows you to edit the questions for that framework. The change will apply to all account members (not just the individual user). The modification will not affect the answers or scores previously submitted but will update the questions for all deals where that framework has been used.</li>
</ul>

<p><img src="../../assets/images/guide9.png" alt="Editing" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<ul>
  <li>Turning on the ‘Default Framework’ switch will set the selected framework as the default for the entire account. Every new deal will use this framework by default. The change will not affect the answers or frameworks previously submitted in existing deals. The default framework is initially set to MEDDICC.</li>
</ul>

<p><img src="../../assets/images/guide10.png" alt="Editing" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="mt-5 mb-3 text-primary">9. Report and Export</h4>

<ul>
  <li>Clicking on Report, a full account pipeline summary can be found.</li>
  <li>From the report is possible to download a CSV with all the notes and scores saved.</li>
</ul>

<p><img src="../../assets/images/guide8.png" alt="Reporting" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<ul>
  <li>The Score is also available as a custom Hubspot variable (score_meddicc), and can be used in reporting, columns, etc.</li>
</ul>

<p><img src="../../assets/images/features4.png" alt="Reporting" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<hr>

<h4 class="mt-5 mb-3 text-primary">10. Upgrade to Premium</h4>

<p>If you like Meddicc Score and want to use it for more than 5 deals, you can upgrade easily from the own app. Click on “Upgrade Now” and you will go to a checkout powered by Stripe.</p>

<p><img src="../../assets/images/guide5.png" alt="Ugrade" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<hr>

</div>

<h3 id="uninstalling-app" data-bs-toggle="collapse" href="#collapseUninstall" role="button" aria-expanded="false" aria-controls="collapseUninstall">Uninstalling the APP <i class="bi bi-chevron-down"></i><a class="header-link" href="#uninstalling-app" title="Permalink"><span class="sr-only">Permalink</span></a></h3>

<div class="collapse" id="collapseUninstall">

<p>Navigate to <strong>Settings &gt; Integrations &gt; Connected Apps</strong> in HubSpot to uninstall Meddicc Score without impacting your HubSpot data.</p>

<p><img src="../../assets/images/guide6.png" alt="Uninstall" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<hr>

</div>

<h3 id="uninstalling-app" data-bs-toggle="collapse" href="#collapseTrouble" role="button" aria-expanded="false" aria-controls="collapseTrouble">Troubleshooting <i class="bi bi-chevron-up"></i><a class="header-link" href="#uninstalling-app" title="Permalink"><span class="sr-only">Permalink</span></a></h3>

<div class="collapse show" id="collapseTrouble">

<h4 id="i-cannot-see-score-as-a-custom-variable--the-score-in-hubspot-is-not-updated-automatically" class="mt-5 mb-3 text-primary">I cannot see Score as a custom variable / The Score in HubSpot is not updated automatically<a class="header-link" href="#i-cannot-see-score-as-a-custom-variable--the-score-in-hubspot-is-not-updated-automatically" title="Permalink"><span class="sr-only">Permalink</span></a></h4>

<p>To enable this, you may need to reauthorize the app for the new permits required. Please click here</p>

<p><a href="https://app-eu1.hubspot.com/oauth/authorize?client_id=2da3e323-5933-4b26-a4ca-0724ed3a6c7e&amp;redirect_uri=https://app.meddiccscore.com/oauth-callback&amp;scope=oauth%20crm.objects.deals.read%20crm.objects.deals.write&amp;optional_scope=crm.pipelines.orders.write%20sales-email-read" target="_blank"><img src="../../assets/images/installBtn.png" alt="Install"></a></p>

<p>You may also need before that, to have permits to add new properties (or someone else who has authorized the app with permits).</p>

<p><img src="../../assets/images/trouble1.png" alt="troubleshooting" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<p>It would be possible also to create the variable manually. It can be done in Settings:</p>

<p><img src="../../assets/images/trouble12.png" alt="troubleshooting" class="my-5 border border-3 border-primary rounded rounded-3"></p>

<p>It is very important to make it work that:</p>

<ul>
  <li>the internal name be exactly “score_meddicc”</li>
  <li>Object type is “Deal”</li>
  <li>Group is “Deal information”</li>
</ul>

<p><img src="../../assets/images/trouble2.png" alt="troubleshooting" class="my-5 w-50 border border-3 border-primary rounded rounded-3"></p>

<hr>
<h4 id="the-ai-autofill-is-not-taking-information-from-my-emails" class="mt-5 mb-3 text-primary">The AI Autofill is not taking information from my Emails<a class="header-link" href="#the-ai-autofill-is-not-taking-information-from-my-emails" title="Permalink"><span class="sr-only">Permalink</span><i class="fas fa-link"></i></a></h4>

<p>To enable this, you may need to reauthorize the app for the new permits required (access to read emails basically). Please click here:</p>

<p><a href="https://app-eu1.hubspot.com/oauth/authorize?client_id=2da3e323-5933-4b26-a4ca-0724ed3a6c7e&amp;redirect_uri=https://app.meddiccscore.com/oauth-callback&amp;scope=oauth%20crm.objects.deals.read%20crm.objects.deals.write&amp;optional_scope=crm.pipelines.orders.write%20sales-email-read" target="_blank"><img src="../../assets/images/installBtn.png" alt="Install" class="w-10">
</a></p>

<p>In all cases, the information extracted from emails is limited to the initial portion of each email. This helps avoid processing repetitive long threads, legal disclaimers, and other non-essential content. However, if critical Deal information is buried deep within the email threads or other engagements, the AI might not capture or interpret it accurately.</p>

<hr>
<h4 id="how-can-add-a-discount-code" class="mt-5 mb-3 text-primary">How can add a discount code<a class="header-link" href="#how-can-add-a-discount-code" title="Permalink"><span class="sr-only">Permalink</span><i class="fas fa-link"></i></a></h4>

<p>On the checkout Stripe page, there is a button ‘Add Code’ where you can add yu discount code. The price will be automatically updated. If you face any problem or the code not longer works, please <a href="&quot;meddiccscore@gmail.com&quot;">Contact Us</a>:</p>

<p><img src="../../assets/images/trouble4.png" alt="troubleshooting" class="mt-5 w-50 border border-3 border-primary rounded rounded-3"></p>

<p><img src="../../assets/images/trouble3.png" alt="troubleshooting" class="mb-5 w-50 border border-3 border-primary rounded rounded-3"></p>

<p>If you already have a subscription and want to add a coupon code, it cannot be done automatically, please <a href="&quot;meddiccscore@gmail.com&quot;">Contact Us</a></p>

<hr>
<h4 id="how-can-cancell-or-manage-my-subcription" class="mt-5 mb-3 text-primary">How can cancell or manage my subscription<a class="header-link" href="#how-can-cancell-or-manage-my-subcription" title="Permalink"><span class="sr-only">Permalink</span><i class="fas fa-link"></i></a></h4>

<p>If you want to cancell your subscription or change de invoice details, you can access the Customer Portal by clikcing on “Manage my subscription”</p>

<p><img src="../../assets/images/trouble6.png" alt="troubleshooting" class="mt-5 w-50 border border-3 border-primary rounded rounded-3"></p>

<p><img src="../../assets/images/trouble5.png" alt="troubleshooting" class="mb-5 border border-3 border-primary rounded rounded-3"></p>

</div>
