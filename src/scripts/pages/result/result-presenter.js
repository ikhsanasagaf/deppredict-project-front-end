export default class ResultPresenter {
  #view;
  #container;

  constructor({ view, container }) {
    this.#view = view;
    this.#container = container;
  }

  displayResult() {
    try {
      const dataString = sessionStorage.getItem('predictionData');
      if (!dataString) {
        this.#view.renderError();
        return;
      }
      const data = JSON.parse(dataString);
      this.#view.renderResult(data);
    } catch (error) {
      console.error('Failed to display result:', error);
      this.#view.renderError();
    }
  }
}