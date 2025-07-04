import PredictPresenter from './predict-presenter';
import DepPredictAPI from '../../data/deppredict-api';

class PredictPage {
  constructor() {
    this._presenter = null;
  }

  async render() {
    return `
      <div id="predict-page-content-area" class="container my-5">
        ${this._getFormTemplate()}
      </div>
    `;
  }

  async afterRender() {
    this._presenter = new PredictPresenter({
      view: this,
      model: DepPredictAPI,
    });
    this._presenter.setupFormListener();
  }

  _getFormTemplate() {
    return `
      <div class="card col-md-10 mx-auto" id="pred">
        <div class="card-body p-4">
            <h5 class="mb-0 mt-2 fw-bold" style="color:#104f1f;">Form Prediksi Status Depresi</h5><hr>
            <p>Silahkan isi formulir dibawah. Data Anda akan dikirim secara aman ke server kami untuk diproses.</p>
            <form id="prediction-form">
                <!-- Semua input form Anda di sini -->
                <div class="mb-3">
                    <label for="nama" class="form-label">Nama</label>
                    <input type="text" class="form-control" id="nama" name="nama" placeholder="Masukkan Nama" required>
                </div>
                <!-- ... sisa input form Anda ... -->
                 <div class="row mb-3">
                    <div class="col-md-6 mb-3 mb-md-0">
                        <label for="age" class="form-label">Umur</label>
                        <input type="number" class="form-control" id="age" name="age" placeholder="Masukkan Umur" required>
                    </div>
                    <div class="col-md-6">
                        <label for="gender" class="form-label">Jenis Kelamin</label>
                        <select class="form-select" name="gender" id="gender" required>
                            <option selected disabled value="">Pilih Jenis Kelamin</option>
                            <option value="1">Laki-laki</option>
                            <option value="0">Perempuan</option>
                        </select>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-6 mb-3 mb-md-0">
                        <label for="sem" class="form-label">Semester</label>
                        <input type="number" class="form-control" id="sem" name="sem" placeholder="Masukkan Semester" required>
                    </div>
                    <div class="col-md-6">
                        <label for="cgpa" class="form-label">IPK Sekarang</label>
                        <input type="number" step="0.01" class="form-control" id="cgpa" name="cgpa" placeholder="Contoh: 3.75" required>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <label for="ap" class="form-label">Tekanan Akademik</label>
                        <input type="range" class="form-range" min="1" max="5" id="ap" name="ap" value="1">
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <label for="ss" class="form-label">Kepuasan Lingkungan Studi</label>
                        <input type="range" class="form-range" min="1" max="5" id="ss" name="ss" value="1">
                    </div>
                    <div class="col-md-4">
                        <label for="fs" class="form-label">Tekanan Finansial</label>
                        <input type="range" class="form-range" min="1" max="5" id="fs" name="fs" value="1">
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <label for="sh" class="form-label">Total Jam Belajar per-Hari</label>
                        <input type="number" class="form-control" id="sh" name="sh" placeholder="Masukkan Total Jam Belajar" required>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <label for="sd" class="form-label">Durasi Tidur</label>
                        <select class="form-select" id="sd" name="sd" required>
                            <option selected disabled value="">Pilih Durasi Tidur</option>
                            <option value="1">Kurang dari 5 Jam</option>
                            <option value="2">5-6 Jam</option>
                            <option value="3">7-8 Jam</option>
                            <option value="4">Lebih dari 8 Jam</option>
                          </select>
                    </div>
                    <div class="col-md-4">
                        <label for="dh" class="form-label">Kebiasaan Makan</label>
                        <select class="form-select" id="dh" name="dh" required>
                            <option selected disabled value="">Pilih Kebiasaan Makan</option>
                            <option value="1">Tidak Sehat</option>
                            <option value="2">Sedang</option>
                            <option value="3">Sehat</option>
                          </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 mb-3 mb-md-0">
                        <label for="fam" class="form-label">Riwayat Penyakit Mental Keluarga?</label>
                        <select class="form-select" id="fam" name="fam" required>
                            <option selected disabled value="">Pilih Ya/Tidak</option>
                            <option value="1">Ya</option>
                            <option value="0">Tidak</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="sui" class="form-label">Pernah memiliki keinginan bunuh diri?</label>
                        <select class="form-select" id="sui" name="sui" required>
                            <option selected disabled value="">Pilih Ya/Tidak</option>
                            <option value="1">Ya</option>
                            <option value="0">Tidak</option>
                        </select>
                    </div>
                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-between mt-4">
                    <button type="submit" name="hitung" class="btn btn-success fw-bold">Prediksi</button>
                    <a href="#/" class="btn btn-outline-secondary fw-bold">Kembali</a>
                </div>
            </form>
        </div>
      </div>
    `;
  }
}

export default PredictPage;