export default class RegisterPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  async getRegistered({ name, email, password }) {
    if (!name || !email || !password) {
      this.#view.registeredFailed(
        "Nama, email, dan password tidak boleh kosong."
      );
      return;
    }

    this.#view.showSubmitLoadingButton();
    try {
      const response = await this.#model.register({ name, email, password });
      this.#view.registeredSuccessfully(response.message);
    } catch (error) {
      this.#view.registeredFailed(error.message);
    } finally {
      this.#view.hideSubmitLoadingButton();
    }
  }
}
