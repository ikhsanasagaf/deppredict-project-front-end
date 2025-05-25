// CSS imports
import "../styles/styles.css";

document.addEventListener("DOMContentLoaded", async () => {
  const app = new App({
    content: document.querySelector("#main-content"),
    drawerButton: document.querySelector("#drawer-button"),
    navigationDrawer: document.querySelector("#navigation-drawer"),
  });

  window.addEventListener("load", () => {
      
    app.renderPage();
  });

  window.addEventListener("hashchange", async () => {

    await app.renderPage();
  });

});