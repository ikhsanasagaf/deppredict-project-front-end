import HomePresenter from './home-presenter.js';

export default class HomePage {
  #presenter;

  async render() {
    return `
        <h1> Home Page </h1>
    `;
  }

  async afterRender() {
    this.#presenter = new HomePresenter({ view: this });
  }
}
