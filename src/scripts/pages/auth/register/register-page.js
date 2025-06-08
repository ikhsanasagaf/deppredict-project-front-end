import RegisterPresenter from "./register-presenter.js";
import DepPredictAPI from "../../../data/deppredict-api.js";
import Swal from "sweetalert2";
import "../../../../styles/auth.css";

export default class RegisterPage {
  #presenter = null;

  async render() {
    return `
      <div class="login-page-container">
        <section class="login-illustration-side">
          <img src="/doctor.png" alt="DepPredict Illustration">
        </section>
        
        <section class="login-form-side">
          <div class="login-box">
            <p class="title">BUAT AKUN BARU</p>
            <div class="separator"></div>
            <p class="welcome-message">Daftarkan diri Anda untuk mulai menggunakan layanan kami.</p>

            <form id="register-form" class="login-form" novalidate>
              <div class="input-group mb-3">
                <span class="input-group-text"><i class="fas fa-user fa-fw"></i></span>
                <input type="text" id="name" class="form-control" placeholder="Nama" required>
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text"><i class="fas fa-envelope fa-fw"></i></span>
                <input type="email" id="email" class="form-control" placeholder="Email" required>
              </div>
              
              <div class="input-group mb-4">
                <span class="input-group-text"><i class="fas fa-lock fa-fw"></i></span>
                <input type="password" id="password" class="form-control" placeholder="Password" required>
              </div>

              <button type="submit" class="btn btn-success w-100 fw-bold auth-form__button">DAFTAR</button>
            </form>

            <p class="mt-4">
              Sudah punya akun? <a href="#/login">Masuk disini</a>
            </p>
          </div>
        </section>
      </div>
    `;
  }

  async afterRender() {
    this.#presenter = new RegisterPresenter({
      view: this,
      model: DepPredictAPI,
    });
    this.#setupForm();
  }

  #setupForm() {
    const registerForm = document.getElementById("register-form");
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };
      await this.#presenter.getRegistered(data);
    });
  }

  registeredSuccessfully(message) {
    Swal.fire({
      title: "Registrasi Berhasil!",
      text: message || "Akun Anda berhasil dibuat. Silakan login.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      window.location.hash = "#/login";
    });
  }

  registeredFailed(message) {
    Swal.fire({
      title: "Registrasi Gagal",
      text: message || "Terjadi kesalahan. Silakan coba lagi.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }

  showSubmitLoadingButton() {
    const button = document.querySelector(".auth-form__button");
    button.disabled = true;
    button.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Mendaftarkan...`;
  }

  hideSubmitLoadingButton() {
    const button = document.querySelector(".auth-form__button");
    button.disabled = false;
    button.innerHTML = "DAFTAR";
  }
}
