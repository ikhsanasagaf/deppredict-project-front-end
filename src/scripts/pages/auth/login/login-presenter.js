export default class LoginPresenter {
  #view;
  #model;
  #authModel;

  constructor({ view, model, authModel }) {
    this.#view = view;
    this.#model = model;
    this.#authModel = authModel;
  }

  async getLogin({ email, password }) {
    if (!email || !password) {
      this.#view.loginFailed("Email dan password tidak boleh kosong.");
      return;
    }

    this.#view.showSubmitLoadingButton();
    try {
      const response = await this.#model.login({ email, password });
      this.#authModel.putAccessToken(response.data.accessToken);
      this.#view.loginSuccessfully();
    } catch (error) {
      this.#view.loginFailed(error.message);
    } finally {
      this.#view.hideSubmitLoadingButton();
    }
  }
}
