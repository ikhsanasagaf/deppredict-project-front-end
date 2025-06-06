class PredictPresenter {
  constructor({ view, container }) {
    this._view = view;
    this._container = container;

    if (!this._view || typeof this._view.displayForm !== 'function') {
      throw new Error('Presenter membutuhkan View dengan metode displayForm!');
    }
    if (!this._container) {
      throw new Error('Presenter membutuhkan elemen container!');
    }
  }

  async showForm() {
    try {
      this._view.displayForm(this._container);
      this._addFormSubmitListener();
    } catch (error) {
      console.error('Gagal menampilkan form prediksi:', error);
      this._container.innerHTML = '<p class="text-danger text-center">Terjadi kesalahan saat memuat form.</p>';
    }
  }

  _addFormSubmitListener() {
    const form = document.getElementById('prediction-form');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        this._handleFormSubmit(form);
      });
    } else {
      console.error('Form dengan ID "prediction-form" tidak ditemukan.');
    }
  }

  _handleFormSubmit(formElement) {
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    console.log('Form data:', data);
    alert('Data form telah tercatat di console. Lihat console (F12) untuk detailnya.');

    // TODO: Kirim data ke API backend untuk prediksi
    // const resultContainer = document.getElementById('prediction-result');
    // resultContainer.innerHTML = `
    //   <div class="alert alert-success">
    //     <h4>Hasil Prediksi:</h4>
    //     <p>Berdasarkan data yang Anda masukkan, Anda diprediksi <strong>[HASIL_PREDIKSI_DI_SINI]</strong>.</p>
    //   </div>
    // `;
  }
}

export default PredictPresenter;