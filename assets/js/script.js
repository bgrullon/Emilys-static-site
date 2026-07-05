/* =========================================================
   Emily's Pet Grooming — small interactions
   ========================================================= */

// --- Current year in footer ---
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// --- Mobile navigation toggle ---
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu after clicking a link (mobile)
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// --- Contact form: open the visitor's email app with a pre-filled message ---
// NOTE: Update CONTACT_EMAIL below once Emily has a business email address.
const CONTACT_EMAIL = "hello@emilyspetgrooming.com";

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    const subject = `Grooming inquiry from ${name}`;
    const body =
      `Hi Emily,\n\n${message}\n\n` +
      `Thanks!\n${name}\n(Reply to: ${email})`;

    const mailto =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    if (status) {
      status.textContent =
        "Opening your email app… If nothing happens, please DM me on Instagram!";
    }
    form.reset();
  });
}
