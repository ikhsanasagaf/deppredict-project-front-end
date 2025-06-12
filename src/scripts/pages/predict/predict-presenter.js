import * as tf from '@tensorflow/tfjs';
import Swal from 'sweetalert2';

class PredictPresenter {
  #view = null;
  #model = null;
  #scalerParams = null;

  constructor({ view }) {
    this.#view = view;
  }

  async init() {
    this.#view.showLoading();
    console.log('Fetching:', '/model_web/model.json');
    try {
      const m = await tf.loadLayersModel('/model_web/model.json');
      console.log('Success:', m);
    } catch(e) {
      console.error('Gagal memuat model:', e);
    }
    try {
      [this.#model, this.#scalerParams] = await Promise.all([
        tf.loadLayersModel('/model_web/model.json'),
        fetch('/scaler_params.json').then(res => res.json())
      ]);
      console.log('Model dan scaler berhasil dimuat.');
      this.#view.renderForm();
    } catch (error) {
      console.error('Gagal memuat model:', error);
      Swal.fire('Error', 'Gagal memuat model prediksi. Coba muat ulang halaman.', 'error');
    } finally {
      this.#view.hideLoading();
    }
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

  _handlePrediction(formElement) {
    if (!this.#model || !this.#scalerParams) {
      Swal.fire('Error', 'Model belum siap. Mohon tunggu.', 'error');
      return;
    }

    try {
      const formData = new FormData(formElement);
      const dataForStorage = Object.fromEntries(formData.entries());
      
      const features = [
        0,
        Number(formData.get('age')),              
        Number(formData.get('ap')),                
        0,                                        
        Number(formData.get('cgpa')),              
        Number(formData.get('ss')),                
        0,                                       
        Number(formData.get('sd')),                
        Number(formData.get('dh')),               
        Number(formData.get('sui')),               
        Number(formData.get('sh')),                
        Number(formData.get('fs')),              
        Number(formData.get('fam')),               
      ];

  
      if (features.some(isNaN)) {
        throw new Error('Pastikan semua field terisi dengan benar.');
      }

      const scaledFeatures = features.map((feature, index) => 
        (feature - this.#scalerParams.mean[index]) / this.#scalerParams.scale[index]
      );
      
      const inputTensor = tf.tensor2d([scaledFeatures]);
      const predictionTensor = this.#model.predict(inputTensor);
      const predictionResult = predictionTensor.dataSync()[0] > 0.5 ? 1 : 0;

      inputTensor.dispose();
      predictionTensor.dispose();
      
      dataForStorage.prediction = predictionResult;

      sessionStorage.setItem('predictionData', JSON.stringify(dataForStorage));

      window.location.hash = '#/result';

    } catch (error) {
      console.error("Error saat prediksi:", error);
      Swal.fire('Error', `Terjadi kesalahan saat melakukan prediksi: ${error.message}`, 'error');
    }
  }
}

export default PredictPresenter;