/*!
 * Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
 */
//
// Scripts
//

// BANT trick
// Get the current URL
const currentUrl = window.location.href;

// Create a URL object to parse the URL
const url = new URL(currentUrl);

// Use URLSearchParams to get query parameters
const params = new URLSearchParams(url.search);

// Check if the parameter 'bant' exists and is set to 'true'
if (params.get("bant") === "true") {
  document.querySelectorAll(".frameworkName").forEach((el) => {
    el.innerHTML = "BANT";
  });
}

const navContexts = ["hubspot", "crm"];
const navContextKey = "navContext";

const resolveNavContext = () => {
  const navParam = params.get("nav");
  if (navParam && navContexts.includes(navParam)) {
    try {
      sessionStorage.setItem(navContextKey, navParam);
    } catch (err) {
      console.warn("Unable to persist nav context", err);
    }
    return navParam;
  }

  if (window.location.pathname.startsWith("/hubspot/")) {
    return "hubspot";
  }

  try {
    const storedContext = sessionStorage.getItem(navContextKey);
    if (storedContext && navContexts.includes(storedContext)) {
      return storedContext;
    }
  } catch (err) {
    console.warn("Unable to access sessionStorage for nav context", err);
  }

  return "hubspot";
};

const applyNavContext = () => {
  const context = resolveNavContext();
  if (!context) return;

  document.documentElement.dataset.navContext = context;

  document.querySelectorAll("[data-nav-context]").forEach((el) => {
    const shouldShow =
      el.dataset.navContext === context || el.dataset.navContext === "both";
    el.classList.toggle("d-none", !shouldShow);
    el.setAttribute("aria-hidden", (!shouldShow).toString());
  });
};

const initNavContext = () => {
  try {
    applyNavContext();
  } catch (err) {
    console.warn("Unable to toggle nav context", err);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavContext);
} else {
  initNavContext();
}

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-1044945541/5ez-CNiRtqYYEIW1ovID",
    event_callback: callback,
  });
  return false;
}

window.REQUIRED_CODE_ERROR_MESSAGE = "Please choose a country code";
window.LOCALE = "en";
window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE =
  "The information provided is invalid. Please review the field format and try again.";

window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

window.GENERIC_INVALID_MESSAGE =
  "The information provided is invalid. Please review the field format and try again.";

window.translation = {
  common: {
    selectedList: "{quantity} list selected",
    selectedLists: "{quantity} lists selected",
  },
};

var AUTOHIDE = true;

// End Brevo Form -->

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Shown all the accordion on the sidebar

  const sidebar = document.querySelector(".resume");
  if (sidebar) {
    sidebar.addEventListener("click", (e) => {
      const accordions = document.querySelectorAll(".accordion-collapse");
      accordions.forEach(function (element) {
        element.classList.add("show");
      });
    });
  }
});

document.querySelectorAll("iframe.youtubevideo").forEach((iframe) => {
  const injectStyle = () => {
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      console.log("Iframe document: ", doc);
      if (!doc || !doc.head) return;
      const style = doc.createElement("style");
      style.textContent = ".ytp-gradient-top{display:none !important;}";
      doc.head.appendChild(style);
    } catch (err) {
      // cross-origin iframe — cannot inject
      console.warn("Unable to inject CSS into iframe", iframe, err);
    }
  };

  if (iframe.contentDocument?.readyState === "complete" || iframe.complete) {
    injectStyle();
  } else {
    iframe.addEventListener("load", injectStyle, { once: true });
  }
});
