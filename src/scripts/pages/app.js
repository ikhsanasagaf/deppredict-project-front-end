import routes from "../routes/routes";
import { getActiveRoute, getActivePathname } from "../routes/url-parser";
import AuthTokenManager from "../utils/auth-token-manager";
import NavbarAuth from "../components/navbar-auth";
import Swal from "sweetalert2";

class App {
  #content = null;
  #authButtonContainer = null;

  constructor({ content, authButtonContainer }) {
    this.#content = content;
    this.#authButtonContainer = authButtonContainer;
    this.renderAuthButton();
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
    const url = getActivePathname();
    const isUserLoggedIn = AuthTokenManager.getAccessToken();
    const protectedRoutes = ["/predict", "/result"];

    if (protectedRoutes.includes(url) && !isUserLoggedIn) {
      Swal.fire({
        title: "Akses Ditolak",
        text: "Anda harus login terlebih dahulu untuk mengakses halaman ini.",
        icon: "warning",
        confirmButtonText: "Login Sekarang",
      }).then(() => {
        window.location.hash = "#/login";
      });
      return;
    }

    this.renderAuthButton();

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
      this._updateActiveNavLink(url);

      const navbarCollapseEl = document.getElementById("navbarNavAltMarkup");
      if (navbarCollapseEl && navbarCollapseEl.classList.contains("show")) {
        const bsCollapse =
          bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl);
        bsCollapse.hide();
      }
    } catch (error) {
      console.error("Error rendering page:", error);
      this.#content.innerHTML = `<div class="container text-center py-5">
                                   <h2>Halaman tidak ditemukan</h2>
                                   <p>Maaf, konten yang Anda cari tidak tersedia.</p>
                                 </div>`;
    }
  }

  renderAuthButton() {
    const isUserLoggedIn = AuthTokenManager.getAccessToken();
    if (isUserLoggedIn) {
      this.#authButtonContainer.innerHTML =
        NavbarAuth.createLogoutButtonTemplate();
      this.#authButtonContainer
        .querySelector("#logoutButton")
        .addEventListener("click", () => {
          this._handleLogout();
        });
    } else {
      this.#authButtonContainer.innerHTML =
        NavbarAuth.createLoginButtonTemplate();
    }
  }

  _handleLogout() {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda akan keluar dari sesi ini.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, logout!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        AuthTokenManager.deleteAccessToken();
        this.renderAuthButton();
        window.location.hash = "#/login";

        Swal.fire({
          title: "Logout Berhasil!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  }

  _updateActiveNavLink(currentPath) {
    const navLinks = document.querySelectorAll(
      ".navbar-nav .nav-link, .navbar-nav .btn"
    );
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href) {
        const linkPath = href.replace("#", "");

        link.classList.remove("active");
        if (linkPath === currentPath) {
          link.classList.add("active");
        }
      }
    });
  }
}

export default App;
