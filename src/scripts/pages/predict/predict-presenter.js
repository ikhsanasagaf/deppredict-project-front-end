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
        0,                                         // 0. Id (diisi 0 karena tidak digunakan)
        Number(formData.get('age')),               // 1. Age
        Number(formData.get('ap')),                // 2. Academic Pressure
        0,                                         // 3. Work Pressure (diisi 0 karena tidak digunakan)
        Number(formData.get('cgpa')),              // 4. CGPA
        Number(formData.get('ss')),                // 5. Study Satisfaction
        0,                                         // 6. Job Satisfaction (diisi 0 karena tidak digunakan)
        Number(formData.get('sd')),                // 7. Sleep Duration
        Number(formData.get('dh')),                // 8. Dietary Habits
        Number(formData.get('sui')),               // 9. Suicidal thoughts
        Number(formData.get('sh')),                // 10. Work/Study Hours
        Number(formData.get('fs')),                // 11. Financial Stress
        Number(formData.get('fam')),               // 12. Family History
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