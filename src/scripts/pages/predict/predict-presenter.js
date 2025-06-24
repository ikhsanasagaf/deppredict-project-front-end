import Swal from 'sweetalert2';

class PredictPresenter {
  constructor({ view, model }) {
    this._view = view;
    this._model = model;
  }

  setupFormListener() {
    const form = document.getElementById('prediction-form');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        this._handlePrediction(form);
      });
    }
  }

  async _handlePrediction(formElement) {
    Swal.fire({
      title: 'Memproses Prediksi...',
      text: 'Mohon tunggu sebentar.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const formData = new FormData(formElement);
      const dataForStorage = Object.fromEntries(formData.entries());

      // Susun fitur sesuai urutan yang diminta model
      const features = [
        Number(formData.get('gender')),            // 0. Gender
        Number(formData.get('age')),               // 1. Age
        Number(formData.get('ap')),                // 2. Academic Pressure
        Number(formData.get('cgpa')),              // 3. CGPA
        Number(formData.get('ss')),                // 4. Study Satisfaction
        Number(formData.get('sd')),                // 5. Sleep Duration
        Number(formData.get('dh')),                // 6. Dietary Habits
        Number(formData.get('sui')),               // 7. Suicidal thoughts
        Number(formData.get('sh')),                // 8. Work/Study Hours
        Number(formData.get('fs')),                // 9. Financial Stress
        Number(formData.get('fam')),               // 10. Family History
      ];

      if (features.some(isNaN)) {
        throw new Error('Pastikan semua field terisi dengan benar.');
      }
      
      // Panggil API back-end untuk mendapatkan prediksi
      const predictionResult = await this._model.getPrediction({ features });

      // Gabungkan hasil prediksi dengan data form
      dataForStorage.prediction = predictionResult.prediction;

      sessionStorage.setItem('predictionData', JSON.stringify(dataForStorage));
      
      Swal.close();
      window.location.hash = '#/result';

    } catch (error) {
      Swal.fire('Error', `Terjadi kesalahan: ${error.message}`, 'error');
    }
  }
}

export default PredictPresenter;