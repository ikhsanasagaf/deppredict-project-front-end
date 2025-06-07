import routes from "../routes/routes";
import { getActiveRoute, getActivePathname } from "../routes/url-parser";

class App {
  #content = null;

  constructor({ content }) {
    this.#content = content;
  }

  async renderPage() {
    if (!document.startViewTransition) {
      await this._updateContent();
      return;
    }

    document.startViewTransition(async () => {
      await this._updateContent();
    });
  }

  async _updateContent() {
    const currentPath = getActivePathname();
    const url = getActiveRoute();
    const page = routes[url];

    try {
      if (page) {
        this.#content.innerHTML = await page.render();
        await page.afterRender();
      } else {
        console.warn(`No route found for URL: ${url}`);
        this.#content.innerHTML = `<div class="container text-center py-5">
                                     <h2>Halaman tidak ditemukan</h2>
                                     <p>URL tidak valid atau halaman belum dibuat.</p>
                                   </div>`;
      }
      this._updateActiveNavLink(currentPath);
    } catch (error) {
      console.error("Error rendering page:", error);
      this.#content.innerHTML = `<div class="container text-center py-5">
                                   <h2>Halaman tidak ditemukan</h2>
                                   <p>Maaf, konten yang Anda cari tidak tersedia.</p>
                                 </div>`;
    }
  }

  _updateActiveNavLink(currentPath) {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href").replace("#", "");

      if (linkPath === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
}

export default App;
