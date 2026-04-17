---
layout: single
title: "Meddicc Score Salesforce Setup Guide"
categories: blog
tags:
  - setup guide
  - salesforce
classes: wide no_padding_top
date: 2023-01-01 16:54:38 +0100
excerpt: Guide for installing and configuring Meddicc Score in Salesforce
sidebar_resume: salesforce
header:
  overlay_image: /assets/images/zermatt.jpg
  teaser: /assets/images/zermatt.jpg
  caption:
  video:
    side: true
    id: w3IJ8lJpCIw?rel=0&modestbranding=1&autoplay=0&mute=1&playsinline=1
    provider: "youtube"
---

<div class="row my-4">
  <div class="col-md-6 mb-3">
    <div class="border border-3 border-primary rounded">
      <iframe class="youtubevideo" src="https://www.youtube.com/embed/267NvUK-Oe4" title="Meddicc Score Salesforce Installation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <div class="border border-3 border-primary rounded">
      <iframe src="https://www.youtube.com/embed/D_J_5V0coHA" title="Meddicc Score Salesforce Settings Walkthrough" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>

<p>Meddicc Score for Salesforce installs as a Salesforce package and gives your team a dedicated <strong>Meddicc Score</strong> Lightning app, guided scoring directly inside <strong>Opportunities</strong>, supporting views for <strong>Contacts</strong> and <strong>Accounts</strong>, plus a <strong>Meddicc Dashboard</strong> and <strong>Meddicc Settings</strong> tab.</p>

<p>This guide is designed to help Salesforce admins get the package live quickly, avoid the most common setup blockers, and make sure reps get a strong first experience from day one.</p>

<p><strong>Success looks like this:</strong> users can open the Meddicc Score app, access Opportunities without permission errors, refill and score deals, and managers can review pipeline quality in the dashboard.</p>

<div id="accordionExample" class="accordion">
<div class="accordion-item">

<h3 class="accordion-header">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInstalling" aria-expanded="true" aria-controls="collapseInstalling"><span id="start" class="pt-6-m">Getting Started</span>
</button></h3>

<div class="accordion-collapse collapse show" id="collapseInstalling" data-bs-parent="#accordionExample">
<div class="accordion-body">

<h4 class="pt-6-m mb-3 text-primary" id="install-package">1. Install the Salesforce Package</h4>

<p>Start with the package install link below and sign in with a Salesforce admin user in the target org.</p>

<p class="text-center"><a href="{{ site.salesforceappinstall }}" target="_blank" class="w-50"><img src="/assets/images/installBtn.png" alt="Install Meddicc Score for Salesforce"></a></p>

<p>For the first installation, we recommend selecting <strong>Install for Admins Only</strong>. This gives you a controlled rollout: first validate the experience as an admin, then assign the packaged permission set to the end users who should start with the app.</p>

<p>If Salesforce asks for access to an external site or third-party callout, approve it so the package can reach the Meddicc Score backend for scoring, refill, and settings sync.</p>

<p><strong>Screenshot to add:</strong> the Salesforce package install page showing the package name, the org login, and the <strong>Install for Admins Only</strong> option selected.</p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="confirm-installation">2. Confirm the Package Finished Installing</h4>

<p>After installation completes, take one minute to verify the package assets are visible. This saves time later and confirms the org is ready for user rollout.</p>

<p>You should now be able to find:</p>

<ul>
  <li><strong>Meddicc Score</strong> in the App Launcher</li>
  <li><strong>Meddicc Settings</strong> in Navigation or App Launcher</li>
  <li><strong>Meddicc Dashboard</strong> in Navigation or App Launcher</li>
  <li><strong>Meddicc Score permissions</strong> under Permission Sets</li>
</ul>

<p><strong>Screenshot to add:</strong> App Launcher search results showing <strong>Meddicc Score</strong>, <strong>Meddicc Settings</strong>, and <strong>Meddicc Dashboard</strong>.</p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="assign-permission-set">3. Assign the Permission Set</h4>

<p>The package includes a permission set named <strong>Meddicc Score permissions</strong>. Assign it to every user who should use Meddicc Score. This is the most important step after installation, because it determines whether users see the full experience or hit access-related errors.</p>

<p>Go to <strong>Setup &gt; Permission Sets &gt; Meddicc Score permissions &gt; Manage Assignments</strong>, then add the relevant users.</p>

<p>This permission set grants access to:</p>

<ul>
  <li>The packaged Apex controllers and tabs</li>
  <li>The Meddicc Settings object and fields</li>
  <li>The MEDDICC reporting fields on Opportunity</li>
  <li>The Salesforce objects Meddicc Score reads by default for richer scoring and refill, such as Opportunities, Contacts, Accounts, Tasks, Events, and Chatter posts</li>
</ul>

<p><strong>Important:</strong> if a user is missing this permission set, they may see access errors, missing tabs, or incomplete refill behavior.</p>

<p><strong>Screenshot to add:</strong> the <strong>Meddicc Score permissions</strong> permission set page with <strong>Manage Assignments</strong> visible, or the assignment screen showing one or more users selected.</p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="open-the-app">4. Open the Packaged Lightning App</h4>

<p>Open the <strong>Meddicc Score</strong> app from the App Launcher. The packaged app includes the standard sales tabs plus:</p>

<ul>
  <li><strong>Meddicc Dashboard</strong></li>
  <li><strong>Meddicc Settings</strong></li>
</ul>

<p>This gives admins and users a clean default entry point without manually creating a Lightning app first. For onboarding and training, this is the easiest place to start because all key tabs are already grouped together.</p>

<p><strong>Screenshot to add:</strong> the <strong>Meddicc Score</strong> Lightning app open, with the top navigation showing <strong>Meddicc Dashboard</strong> and <strong>Meddicc Settings</strong>.</p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="review-settings">5. Review the Default Settings</h4>

<p>When the package is installed, a default <strong>Meddicc Setting</strong> record is created automatically. Open <strong>Meddicc Settings</strong> to review it before you invite the broader sales team into the app.</p>

<p>Recommended first checks:</p>

<ul>
  <li>Confirm the active framework is the one you want to use first, usually <strong>MEDDICC</strong></li>
  <li>Review your framework questions and guidance text</li>
  <li>Review scoring behavior and provider settings</li>
  <li>Save the settings once so the admin can confirm everything loads correctly in the org</li>
</ul>

<p>If you want to support multiple frameworks, customize guidance text, or fine-tune scoring behavior before rollout, this is the place to do it.</p>

<p><strong>Screenshot to add:</strong> the <strong>Meddicc Settings</strong> tab open, showing the default settings record and the active framework selector.</p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="check-record-pages">6. Check Opportunity, Contact, and Account Pages</h4>

<p>In most installations, the packaged components should be available immediately. Before rolling out to users, open one <strong>Opportunity</strong>, one <strong>Contact</strong>, and one <strong>Account</strong> to confirm the Meddicc Score components are visible where your team actually works.</p>

<p>If you do not see them, a Salesforce admin should check the Lightning record pages and make sure the packaged components are present and the page assignment is active for the correct apps, profiles, or record types. This is the step that most often decides whether the launch feels smooth for end users.</p>

<p><strong>Screenshot to add:</strong> the Lightning App Builder for an Opportunity record page showing the Meddicc Score component placed on the page.</p>

</div>
</div>
</div>

<div class="accordion-item">

<h3 class="accordion-header">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUsing" aria-expanded="true" aria-controls="collapseUsing"><span id="using" class="pt-6-m">Using the App</span>
</button></h3>

<div class="accordion-collapse collapse show" id="collapseUsing" data-bs-parent="#accordionExample">
<div class="accordion-body">

<h4 class="pt-6-m mb-3 text-primary" id="opportunity-view">7. Work Inside an Opportunity</h4>

<p>The Opportunity view is the main Meddicc Score experience in Salesforce and the first place most reps will form an opinion about the tool.</p>

<p>When a user opens a new Opportunity for the first time:</p>

<ul>
  <li>The default framework is loaded automatically</li>
  <li>The score starts at <strong>0</strong> until the deal is scored</li>
  <li>The form questions are shown by section</li>
  <li>The user can manually type answers or use <strong>Refill</strong> to prefill them from Salesforce data</li>
</ul>

<p><strong>Screenshot to add:</strong> a brand-new Opportunity record showing the Meddicc Score component with a zero score and empty framework questions visible.</p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="refill-score">8. Use Refill and Score</h4>

<p><strong>Refill</strong> reads the Opportunity plus the accessible Salesforce activity context, such as tasks, events, and Chatter posts, and uses AI to prefill the framework answers. This helps reps get to a useful first draft quickly instead of starting from a blank form.</p>

<p><strong>Score</strong> analyzes the form and returns:</p>

<ul>
  <li>An overall MEDDICC score</li>
  <li>Feedback for each section</li>
  <li>Suggested next steps</li>
  <li>Win analysis or post-mortem analysis for closed opportunities</li>
</ul>

<p>Users can then review the responses, edit them, refill again later, or rescore at any time. In practice, this means the score can evolve with the deal instead of becoming a one-time exercise.</p>

<p><strong>Screenshot to add:</strong> an Opportunity after <strong>Refill</strong> showing several questions prefilled with responses and a visible score at the top.</p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="manual-overrides">9. Lock Answers and Override the Score</h4>

<p>Each answer can be locked individually so it is not overwritten during a future refill. Users can also manually adjust the score and lock the score value. This gives managers and reps a practical way to keep trusted inputs stable while still benefiting from AI updates elsewhere.</p>

<p>This is useful when:</p>

<ul>
  <li>A rep wants to preserve a validated answer</li>
  <li>A manager wants to agree on a score manually</li>
  <li>The team wants AI feedback refreshed without changing a locked score</li>
</ul>

<p><strong>Screenshot to add:</strong> the Opportunity component showing a locked question and the score area with the edit and lock icons visible.</p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="contact-account-experience">10. Use Contact and Account Views</h4>

<p>Meddicc Score also adds supporting views for <strong>Contacts</strong> and <strong>Accounts</strong>, so your team can work from the full account context instead of treating MEDDICC as a deal-only exercise.</p>

<p>On Contacts, users can review related opportunities and see AI-generated contact context. On Accounts, users can review the set of related deals and contacts in one place.</p>

<p>This helps teams work from the person and account perspective, not only from the opportunity record.</p>

<p><strong>Screenshot to add:</strong> one Contact record showing the Meddicc side component and one Account record showing the account summary component.</p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="dashboard">11. Use the Dashboard</h4>

<p>The <strong>Meddicc Dashboard</strong> gives admins and sales leaders a quick view of open pipeline quality, adoption, and follow-up priorities.</p>

<p>It includes:</p>

<ul>
  <li>Open opportunities</li>
  <li>Scored opportunities</li>
  <li>At-risk opportunities</li>
  <li>Unscored opportunities</li>
  <li>Average MEDDICC score</li>
</ul>

<p>Use it as the shared starting point for pipeline review, coaching, and identifying which opportunities need scoring attention first.</p>

<p><strong>Screenshot to add:</strong> the <strong>Meddicc Dashboard</strong> page with the KPI tiles and focus opportunity list visible.</p>

</div>
</div>
</div>

<div class="accordion-item">

<h3 class="accordion-header">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTroubleshooting" aria-expanded="true" aria-controls="collapseTroubleshooting"><span id="troubleshooting" class="pt-6-m">Troubleshooting</span>
</button></h3>

<div class="accordion-collapse collapse" id="collapseTroubleshooting" data-bs-parent="#accordionExample">
<div class="accordion-body">

<h4 class="pt-6-m mb-3 text-primary" id="missing-components">12. I Installed the Package but I Do Not See the Components</h4>

<p>Check these items first. In most cases, the issue is page assignment or missing permission-set assignment, not a failed installation.</p>

<ul>
  <li>The user has the <strong>Meddicc Score permissions</strong> permission set</li>
  <li>The user is opening the <strong>Meddicc Score</strong> app or another Lightning app where the record pages are assigned</li>
  <li>The record pages for Opportunity, Contact, and Account include the packaged components and are activated for the relevant app, profile, or record type</li>
</ul>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="access-errors">13. I See an Access Error When Using Refill, Score, or Settings</h4>

<p>This usually means one of the following. The fastest fix is usually to verify the packaged permission set first, then retest with an admin user.</p>

<ul>
  <li>The user does not have the <strong>Meddicc Score permissions</strong> permission set</li>
  <li>The org has additional restrictions on standard Salesforce objects used by the package</li>
  <li>The admin has not granted the package access to the relevant record pages or objects for the user population</li>
</ul>

<p>Start by assigning the packaged permission set, then test again with an admin user.</p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="settings-do-not-load">14. Settings or the Dashboard Do Not Load</h4>

<p>Open the <strong>Meddicc Settings</strong> tab first and confirm the default settings record exists and can be saved. If the page still does not load, check that the package installation finished successfully and that the user has access to the packaged tabs and permission set. This is also a good admin smoke test before enabling the package for a wider team.</p>

<hr>

<h4 class="pt-6-m mb-3 text-primary" id="support">15. Need Help?</h4>

<p>If you still need help after checking the steps above, contact us at <a href="mailto:support@meddiccscore.com">support@meddiccscore.com</a>.</p>

</div>
</div>
</div>
</div>
