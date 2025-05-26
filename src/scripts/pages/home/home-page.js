import HomePresenter from './home-presenter.js';

export default class HomePage {
  #presenter;

  async render() {
    return `
      <!-- Hero Section -->
      <section class="hero-section py-5">
        <div class="container text-center p-5">
          <h1 class="display-5 fw-bold" style="color: #104f1f;">Selamat Datang di <span style="color: #104f1f">Dep</span><span
              style="color: #6ebe77"
              >Predict</span
            ></h1>
          <p class="lead" style="color: #4d7f5e;">
            DepPredict membantu Anda mendeteksi dini gejala depresi lebih awal.
          </p>
          <a href="#/predict" class="btn btn-success mt-3 px-4 py-2">
            Mulai Prediksi
          </a>
        </div>
      </section>

      <!-- Fitur Utama -->
      <section class="features-section py-5" style="background-color: #f8fdf9;">
        <div class="container mt-5 mb-5">
          <div class="row text-center">
            <div class="col-md-4 mb-4">
              <img src="/healthy.png" alt="Sehat" class="img-fluid mb-3" style="max-height: 100px;">
              <h5 class="fw-bold" style="color: #104f1f;">Akses Mudah</h5>
              <p>Website dapat diakses kapan saja dan di mana saja tanpa instalasi.</p>
            </div>
            <div class="col-md-4 mb-4">
              <img src="/hug.png" alt="Support" class="img-fluid mb-3" style="max-height: 100px;">
              <h5 class="fw-bold" style="color: #104f1f;">Privasi Terjamin</h5>
              <p>Data yang Anda masukkan tidak disalahgunakan.</p>
            </div>
            <div class="col-md-4 mb-4">
              <img src="/anxiety.png" alt="Deteksi" class="img-fluid mb-3" style="max-height: 100px;">
              <h5 class="fw-bold" style="color: #104f1f;">Deteksi Berdasarkan Data</h5>
              <p>Menggunakan dataset dari Kaggle untuk hasil prediksi yang akurat.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Kenapa Deteksi Dini Penting -->
      <section class="py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 mb-4 mb-md-0">
              <img src="/stress.png" alt="Deteksi Dini" class="img-fluid rounded" />
            </div>
            <div class="col-md-6 px-2 px-sm-0 text-center text-lg-start" style="font-size: 1.1rem;">
              <h3 class="fw-bold mb-3" style="color: #104f1f;">Kenapa Deteksi Dini Itu Penting?</h3>
              <p style="color: #4d7f5e;">Deteksi dini membantu mencegah dampak jangka panjang dari depresi. Dengan mengenali tanda-tanda awal, kita bisa mengambil langkah cepat untuk mendapatkan bantuan dan pemulihan lebih cepat.</p>
              <p style="color: #4d7f5e;">DepPredict hadir sebagai solusi untuk menyadarkan masyarakat akan pentingnya kesehatan mental sejak dini.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Akhir -->
      <section class="cta-section py-5 text-white text-center" style="background-color: #104f1f;">
        <div class="container">
          <h4 class="fw-bold mb-3">Yuk, Cek Kondisi Mentalmu Sekarang</h4>
          <p class="mb-4">Jangan tunda lagi. Prediksi sekarang dan dapatkan pemahaman awal tentang kondisi mentalmu.</p>
          <a href="#/predict" class="btn btn-light fw-bold px-4 py-2">Mulai Sekarang</a>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new HomePresenter({ view: this });
  }
}
