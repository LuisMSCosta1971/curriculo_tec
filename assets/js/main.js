document.addEventListener("DOMContentLoaded", function () {
  const theme = localStorage.getItem("theme");
  setTheme(theme);
});

function setTheme(theme) {
  const html = document.querySelector("html");
  const iconSpan = document.querySelector(".modo-icon");
  const labelSpan = document.querySelector(".modo-label");

  switch (theme) {
    case "light":
      html.setAttribute("data-theme", "light");
      iconSpan.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
      labelSpan.textContent = "NOITE";
      localStorage.setItem("theme", "light");
      break;
    case "dark":
      html.setAttribute("data-theme", "dark");
      iconSpan.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
      labelSpan.textContent = "DIA";
      localStorage.setItem("theme", "dark");
      break;
    default:
      break;
  }
}

function toggleDarkMode() {
  const html = document.querySelector("html");
  const dataTheme = html.getAttribute("data-theme");
  if (dataTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

window.addEventListener("scroll", function () {
  const header = document.querySelector(".infoPessoal");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});
