import LoginPresenter from "./login-presenter.js";
import Swal from "sweetalert2";
import "../../../../styles/auth.css";

export default class LoginPage {
  #presenter = null;

  async render() {
    return `
      <div class="login-page-container">
        <section class="login-illustration-side">
          <img src="/doctor.png" alt="DepPredict Illustration">
        </section>
        
        <section class="login-form-side">
          <div class="login-box">
            <p class="title">SELAMAT DATANG!</p>
            <div class="separator"></div>
            <p class="welcome-message">Dengan mengisi formulir login di bawah, Anda dapat mengakses seluruh layanan kami.</p>

            <form id="login-form" class="login-form" novalidate>
              <div class="input-group mb-3">
                <span class="input-group-text"><i class="fas fa-envelope fa-fw"></i></span>
                <input type="email" id="email" class="form-control" placeholder="Email" required>
              </div>
              
              <div class="input-group mb-4">
                <span class="input-group-text"><i class="fas fa-lock fa-fw"></i></span>
                <input type="password" id="password" class="form-control" placeholder="Password" required>
              </div>

              <button type="submit" class="btn btn-success w-100 fw-bold auth-form__button">MASUK</button>
            </form>
            <p class="mt-3">
              Belum punya akun? <a href="#/register">Daftar disini</a>
            </p>
          </div>
        </section>
      </div>
    `;
  }

  async afterRender() {
    this.#presenter = new LoginPresenter({
      view: this,
    });
    this.#setupForm();
  }

  #setupForm() {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (loginForm.checkValidity()) {
        const data = {
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        };
        await this.#presenter.getLogin(data);
      } else {
        loginForm.classList.add("was-validated");
      }
    });
  }

  loginSuccessfully() {
    Swal.fire({
      title: "Login Berhasil!",
      text: "Anda akan diarahkan ke halaman utama.",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      window.location.hash = "#/";
    });
  }

  loginFailed(message) {
    Swal.fire({
      title: "Login Gagal",
      text: message || "Email atau password yang Anda masukkan salah.",
      icon: "error",
      confirmButtonText: "Coba Lagi",
    });
  }

  showSubmitLoadingButton() {
    const submitButton = document.querySelector(".auth-form__button");
    submitButton.disabled = true;
    submitButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`;
  }

  hideSubmitLoadingButton() {
    const submitButton = document.querySelector(".auth-form__button");
    submitButton.disabled = false;
    submitButton.innerHTML = "MASUK";
  }
}
