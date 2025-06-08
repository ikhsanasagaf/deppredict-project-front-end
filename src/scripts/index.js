// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// CSS imports
import "../styles/styles.css";

import App from "./pages/app";

document.addEventListener("DOMContentLoaded", async () => {
  const app = new App({
    content: document.querySelector("#main-content"),
    authButtonContainer: document.querySelector("#auth-button-container"),
  });

  const initialRender = async () => {
    await app.renderPage();
    const loader = document.querySelector(".bg-loader");
    if (loader) {
      loader.style.display = "none";
    }
  };

  window.addEventListener("load", initialRender);

  window.addEventListener("hashchange", async () => {
    await app.renderPage();
  });
});
