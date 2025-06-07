export default class RegisterPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async getRegistered({ name, email, password }) {
    // Validasi sederhana
    if (!name || !email || !password) {
      this.#view.registeredFailed(
        "Nama, email, dan password tidak boleh kosong."
      );
      return;
    }

    this.#view.showSubmitLoadingButton();
    console.log("Mencoba mendaftar dengan:", { name, email, password });

    // --- Simulasi Panggilan API ---
    setTimeout(() => {
      try {
        // Simulasi berhasil
        this.#view.registeredSuccessfully(
          "Akun Anda berhasil dibuat. Silakan login."
        );
      } catch (error) {
        // Simulasi gagal
        this.#view.registeredFailed(error.message);
      } finally {
        this.#view.hideSubmitLoadingButton();
      }
    }, 1500); // delay 1.5 detik
  }
}
