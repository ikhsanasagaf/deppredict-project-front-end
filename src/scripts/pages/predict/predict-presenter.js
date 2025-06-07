class PredictPresenter {
  constructor({ view, container }) {
    this._view = view;
    this._container = container;
  }

  async showForm() {
    this._view.displayForm(this._container);
    this._addFormSubmitListener();
  }

  _addFormSubmitListener() {
    const form = document.getElementById("prediction-form");
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        this._handleFormSubmit(form);
      });
    }
  }

  _handleFormSubmit(formElement) {
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    // Simulasi hasil prediksi dari model (random 0 atau 1)
    data.prediction = Math.round(Math.random());

    console.log("Prediction Data to be stored:", data);

    // Simpan data ke sessionStorage untuk diambil oleh halaman hasil
    sessionStorage.setItem("predictionData", JSON.stringify(data));

    // Arahkan ke halaman hasil
    window.location.hash = "#/result";
  }
}

export default PredictPresenter;
