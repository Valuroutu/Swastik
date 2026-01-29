/********************************
 * THEME PANEL TOGGLE
 ********************************/
function toggleThemePanel() {
  const panel = document.getElementById("themePanel");
  panel.classList.toggle("active");
}

/********************************
 * APPLY PRESET THEMES
 ********************************/
function applyTheme(theme) {
  const root = document.documentElement;

  if (theme === "dark") {
    root.style.setProperty("--bg-color", "#0e0e0e");
    root.style.setProperty("--nav-bg", "#000000");
    root.style.setProperty("--card-bg", "#1b1b1b");
    root.style.setProperty("--accent", "gold");
  }

  if (theme === "blue") {
    root.style.setProperty("--bg-color", "#0b1623");
    root.style.setProperty("--nav-bg", "#09111b");
    root.style.setProperty("--card-bg", "#122033");
    root.style.setProperty("--accent", "#3fa9f5");
  }

  if (theme === "gold") {
    root.style.setProperty("--bg-color", "#120f07");
    root.style.setProperty("--nav-bg", "#0a0804");
    root.style.setProperty("--card-bg", "#1a1408");
    root.style.setProperty("--accent", "gold");
  }

  if (theme === "purple") {
    root.style.setProperty("--bg-color", "#120a1f");
    root.style.setProperty("--nav-bg", "#0c0616");
    root.style.setProperty("--card-bg", "#1a0f2e");
    root.style.setProperty("--accent", "#b983ff");
  }

  document.getElementById("themePanel").classList.remove("active");
}

/********************************
 * CUSTOM BACKGROUND COLOR PICKER
 ********************************/
const bgPicker = document.getElementById("bgColorPicker");

if (bgPicker) {
  bgPicker.addEventListener("input", (e) => {
    document.documentElement.style.setProperty(
      "--bg-color",
      e.target.value
    );
  });
}

/********************************
 * FADE-IN ANIMATION ON SCROLL
 ********************************/
const faders = document.querySelectorAll(".fade");

function revealOnScroll() {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/********************************
 * EMAILJS INITIALIZATION
 ********************************/
/*
  Add this script tag in HTML BEFORE script.js:
  <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
*/

(function () {
  emailjs.init("-cwgRpSLceEp0id0f"); // 🔴 replace with EmailJS Public Key
})();

/********************************
 * FORM SUBMISSION (2 EMAILS)
 ********************************/
const applyForm = document.getElementById("applyForm");

if (applyForm) {
  applyForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.getElementById("formStatus");
    status.innerText = "⏳ Sending application...";
    status.className = "";

    emailjs.sendForm(
      "service_4287l9i",   // 🔴 replace
      "template_t9bda4r",  // 🔴 replace
      this
    )
    .then(() => {
      status.innerText =
        "✅ Application sent successfully!";
      status.className = "success";
      applyForm.reset();
    })
    .catch(error => {
      status.innerText =
        "❌ Failed to send application.Resume size should be less than 50kb, Please try again.";
      status.className = "error";
      alert(error);
      console.error("EmailJS Error:", error);
    });
  });
}