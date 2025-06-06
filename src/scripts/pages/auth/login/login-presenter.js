export default class LoginPresenter {
  #view;

  constructor({ view }) {
    this.#view = view;
  }

  async getLogin({ email, password }) {
    this.#view.showSubmitLoadingButton();
    console.log('Mencoba login dengan:', { email, password });

    // --- Simulasi Panggilan API ---
    // Ganti bagian ini dengan panggilan API sesungguhnya nanti
    setTimeout(() => {
      try {
        if (email === "user@example.com" && password === "password123") {
          // Jika berhasil
          this.#view.loginSuccessfully();
        } else {
          // Jika gagal
          throw new Error("Email atau password salah. Coba gunakan: user@example.com & password123");
        }
      } catch (error) {
        this.#view.loginFailed(error.message);
      } finally {
        this.#view.hideSubmitLoadingButton();
      }
    }, 1500); // delay 1.5 detik untuk simulasi loading
  }
}