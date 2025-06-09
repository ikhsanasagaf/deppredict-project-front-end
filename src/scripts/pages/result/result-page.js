import ResultPresenter from './result-presenter';

class ResultPage {
  #presenter = null;

  async render() {
    return `<div id="result-content-area" class="container my-5"></div>`;
  }

  async afterRender() {
    this.#presenter = new ResultPresenter({
      view: this,
      container: document.querySelector('#result-content-area'),
    });
    this.#presenter.displayResult();
  }

  renderResult(data) {
    const container = document.querySelector('#result-content-area');
    
    const mapPressure = (val) => ({ '1': 'Sangat Rendah', '2': 'Rendah', '3': 'Sedang', '4': 'Tinggi', '5': 'Sangat Tinggi' }[val] || 'N/A');
    const mapSatisfaction = (val) => ({ '1': 'Sangat Tidak Puas', '2': 'Tidak Puas', '3': 'Cukup Puas', '4': 'Puas', '5': 'Sangat Puas' }[val] || 'N/A');
    const mapSleep = (val) => ({ '1': 'Kurang dari 5 Jam', '2': '5-6 Jam', '3': '7-8 Jam', '4': 'Lebih dari 8 Jam' }[val] || 'N/A');
    const mapDiet = (val) => ({ '1': 'Tidak Sehat', '2': 'Sedang', '3': 'Sehat' }[val] || 'N/A');
    const mapYesNo = (val) => ({ '1': 'Ya', '0': 'Tidak' }[val] || 'N/A');

    const resultHTML = `
      <div class="card col-md-12">
        <div class="card-body p-4">
          <h5 class="fw-bold" style="color:#104f1f;">Hasil Prediksi</h5>
          <p style="color:#276836;" class="mb-2">Berikut hasil dari prediksi berdasarkan kriteria-kriteria yang sudah diinput.</p>
          <hr>
          <h5 class="fw-bold mb-4 mt-4" style="color:#104f1f;">Informasi Mahasiswa</h5>
          
          <div class="row mb-3">
            <div class="col-md-3"><p class="mb-2">Nama</p><p class="val">${data.nama}</p></div>
            <div class="col-md-2"><p class="mb-2">Umur</p><p class="val">${data.age}</p></div>
            <div class="col-md-2"><p class="mb-2">Jenis Kelamin</p><p class="val">${data.gender === '1' ? 'Laki-laki' : 'Perempuan'}</p></div>
            <div class="col-md-2"><p class="mb-2">Semester</p><p class="val">${data.sem}</p></div>
            <div class="col-md-3"><p class="mb-2">IPK Sekarang</p><p class="val">${data.cgpa}</p></div>
          </div>

          <div class="row mb-3">
            <div class="col-md-3"><p class="mb-2">Tekanan Akademik</p><p class="val">${mapPressure(data.ap)}</p></div>
            <div class="col-md-3"><p class="mb-2">Kepuasan Lingkungan Studi</p><p class="val">${mapSatisfaction(data.ss)}</p></div>
            <div class="col-md-3"><p class="mb-2">Tekanan Finansial</p><p class="val">${mapPressure(data.fs)}</p></div>
            <div class="col-md-3"><p class="mb-2">Total Jam Belajar per-Hari</p><p class="val">${data.sh} Jam</p></div>
          </div>

          <div class="row mb-4">
            <div class="col-md-3"><p class="mb-2">Durasi Tidur</p><p class="val">${mapSleep(data.sd)}</p></div>
            <div class="col-md-3"><p class="mb-2">Kebiasaan Makan</p><p class="val">${mapDiet(data.dh)}</p></div>
            <div class="col-md-3"><p class="mb-2">Riwayat Penyakit Mental Keluarga</p><p class="val">${mapYesNo(data.fam)}</p></div>
            <div class="col-md-3"><p class="mb-2">Keinginan Bunuh Diri</p><p class="val">${mapYesNo(data.sui)}</p></div>
          </div>
          
          ${data.prediction === 1
            ? `
            <div class="p-3 rounded" style="background-color: #ffcdcd;">
              <p class="fw-bold mb-1 fs-6">Hasil Prediksi: Mengidap Depresi</p>
              <p class="mb-0">Hasil ini adalah langkah pertama menuju pemulihan. Kami sarankan untuk berkonsultasi dengan profesional kesehatan mental sesegera mungkin. Mereka dapat memberikan diagnosis yang lebih akurat dan menyusun rencana perawatan yang tepat buat kamu!</p>
            </div>`
            : `
            <div class="p-3 rounded" style="background-color: #a5ffb1;">
              <p class="fw-bold mb-1 fs-6">Hasil Prediksi: Tidak Mengidap Depresi</p>
              <p class="mb-0">Semoga dengan hasil ini, kamu bisa terus melanjutkan kebiasaan baik kamu dan segera kabari pihak terkait apabila kondisi mental kamu sedang tidak baik baik saja. Have a nice day!</p>
            </div>`
          }

          <a href="#/" class="btn btn-dark fw-bold mt-4">Kembali ke Home</a>
        </div>
      </div>
    `;
    container.innerHTML = resultHTML;
  }

  renderError() {
    const container = document.querySelector('#result-content-area');
    container.innerHTML = `
      <div class="text-center">
        <h2>Data Prediksi Tidak Ditemukan</h2>
        <p class="mb-2">Silakan isi form prediksi terlebih dahulu untuk melihat hasilnya.</p>
        <a href="#/predict" class="btn btn-success">Isi Form Prediksi</a>
      </div>
    `;
  }
}

export default ResultPage;