// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// CSS imports
import "../styles/styles.css";

import App from "./pages/app";
import swRegister from "./utils/sw-register";

window.addEventListener("load", async () => {
  const app = new App({
    content: document.querySelector("#main-content"),
    authButtonContainer: document.querySelector("#auth-button-container"),
  });

  window.addEventListener("hashchange", async () => {
    await app.renderPage();
  });

  
  try {
    await app.renderPage();
  } catch (error) {
    console.error("Gagal merender halaman awal:", error);
  } finally {
    const loader = document.querySelector(".bg-loader");
    if (loader) {
      loader.style.display = "none";
    }
  }
  
  await swRegister();
});
