const toggle = document.getElementById("langToggle");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function applyLang(lang) {
  const isEn = lang === "en";
  document.documentElement.lang = lang;
  document.documentElement.dir = isEn ? "ltr" : "rtl";
  toggle.textContent = isEn ? "AR" : "EN";

  document.querySelectorAll("[data-ar]").forEach((el) => {
    el.textContent = isEn ? el.dataset.en : el.dataset.ar;
  });

  localStorage.setItem("marwan-lang", lang);
}

toggle.addEventListener("click", () => {
  const next = document.documentElement.lang === "ar" ? "en" : "ar";
  applyLang(next);
});

const saved = localStorage.getItem("marwan-lang");
if (saved === "en") {
  applyLang("en");
}
