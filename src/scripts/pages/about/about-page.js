import AboutPresenter from "./about-presenter";

class AboutPage {
  constructor() {
    this._presenter = null;

    this._aboutImageUrl = "/anxiety.png";
    this._presenterName = "CC25-CF325";
  }

  async render() {
    return `
      <div id="about-page-content-area" class="about-page-content-area">
        </div>
    `;
  }

  async afterRender() {
    const aboutContentAreaElement = document.querySelector(
      "#about-page-content-area"
    );
    if (!aboutContentAreaElement) {
      console.error("Elemen #about-page-content-area tidak ditemukan!");
      return;
    }

    this._presenter = new AboutPresenter({
      view: this,
      container: aboutContentAreaElement,
    });

    await this._presenter.showAboutPageContent();
  }

  _getAboutContentTemplate() {
    const presenterInfo = `
      <p>Website ini dibuat dan dikelola oleh Tim ${this._presenterName}.</p>
      <p>Kami adalah mahasiswa dari berbagai universitas di Indonesia yang sedang mengikuti program Coding Camp by DBS Foundation</p>
    `;

    return `
      <div class="about-section py-5">
        <div class="container">
          <div class="row mb-4">
            <div class="col-12 text-center mb-5">
              <h2 class="fw-bold display-6" style="color: #104f1f;">Tentang DepPredict</h2>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
              <img src="${this._aboutImageUrl}" alt="Ilustrasi kecemasan atau depresi" class="img-fluid" style="max-width: 70%; height: auto; border-radius: 25px;">
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="about-text px-2 px-sm-0 text-center text-lg-start" style="color: #104f1f; line-height: 1.6; font-size: 1.05rem;">
                <p>
                  DepPredict dibuat dengan sepenuh hati oleh kami untuk Project Capstone pada Coding Camp. Kami membuat website ini karena pada zaman sekarang marak sekali anak muda yang mengidap depresi.
                </p>
                <p>
                  Untuk dataset yang digunakan, kami mengambil dari Kaggle dengan judul <em>"Student Depression Dataset"</em> oleh Shodolamu Opeyemi yang memiliki 18 fitur dan berjumlah total 27.901 data atau record.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5 mb-4 mt-5" id="about-presenter-section">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="card p-3 p-md-4 shadow-sm">
              <div class="card-body text-center">
                <h4 class="card-title mb-3" style="color: #0c3f18;">${this._presenterName}</h4>
                <div style="color: #333; font-size: 1.05rem; line-height: 1.6;">
                  ${presenterInfo}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row mb-5">
            <div class="col text-center">
            <h2 class="fw-bold display-6" style="color: #104f1f;">Tim Kami</h2>
            <p class="text-muted">Orang-orang hebat di balik DepPredict</p>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
            <div class="card team-card text-center border-0 shadow-sm h-100 w-100">
                <div class="card-body d-flex flex-column">
                <img src="/avatar-sofyan.jpg" alt="Sofyan Pahlevi" class="rounded-circle img-fluid mx-auto mb-3 shadow-sm" style="width: 120px; height: 120px; object-fit: cover; border: 3px solid #6ebe77;">
                <h5 class="card-title fw-bold mb-1" style="color: #104f1f;">Sofyan Pahlevi</h5>
                <p class="text-muted small mb-3">Machine Learning</p>
                <div class="mt-auto">
                    <a href="https://github.com/SofyanSaif" class="text-decoration-none me-2" style="color: #104f1f;"><i class="fab fa-github"></i></a>
                    <a href="http://www.linkedin.com/in/sofyansaif2214006" class="text-decoration-none me-2" style="color: #007bff;"><i class="fab fa-linkedin"></i></a>
                </div>
                </div>
            </div>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
            <div class="card team-card text-center border-0 shadow-sm h-100 w-100">
                <div class="card-body d-flex flex-column">
                <img src="/avatar2.png" alt="Satria Dirgantara" class="rounded-circle img-fluid mx-auto mb-3 shadow-sm" style="width: 120px; height: 120px; object-fit: cover; border: 3px solid #6ebe77;">
                <h5 class="card-title fw-bold mb-1" style="color: #104f1f;">Satria Dirgantara</h5>
                <p class="text-muted small mb-3">Machine Learning</p>
                <div class="mt-auto">
                    <a href="https://github.com/BagasNuryaman15" class="text-decoration-none me-2" style="color: #104f1f;"><i class="fab fa-github"></i></a>
                    <a href="http://www.linkedin.com/in/satriadirgantaranuryaman" class="text-decoration-none me-2" style="color: #007bff;"><i class="fab fa-linkedin"></i></a>
                </div>
                </div>
            </div>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
            <div class="card team-card text-center border-0 shadow-sm h-100 w-100">
                <div class="card-body d-flex flex-column">
                <img src="/avatar-tasya.png" alt="Tasya Panggabean" class="rounded-circle img-fluid mx-auto mb-3 shadow-sm" style="width: 120px; height: 120px; object-fit: cover; border: 3px solid #6ebe77;">
                <h5 class="card-title fw-bold mb-1" style="color: #104f1f;">Tasya Panggabean</h5>
                <p class="text-muted small mb-3">Machine Learning</p>
                <div class="mt-auto">
                    <a href="https://github.com/Tasyaya" class="text-decoration-none me-2" style="color: #104f1f;"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/tasya-panggabean-247a6a351/" class="text-decoration-none me-2" style="color: #007bff;"><i class="fab fa-linkedin"></i></a>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div class="row justify-content-center mt-5">
            <div class="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
            <div class="card team-card text-center border-0 shadow-sm h-100 w-100">
                <div class="card-body d-flex flex-column">
                <img src="/avatar-ikhsan.png" alt="Muhammad Ikhsan Asagaf" class="rounded-circle img-fluid mx-auto mb-3 shadow-sm" style="width: 120px; height: 120px; object-fit: cover; border: 3px solid #6ebe77;">
                <h5 class="card-title fw-bold mb-1" style="color: #104f1f;">Ikhsan Asagaf</h5>
                <p class="text-muted small mb-3">Front-end & Back-End Developer</p>
                <div class="mt-auto">
                    <a href="https://github.com/ikhsanasagaf" target="_blank" rel="noopener noreferrer" class="text-decoration-none me-2" style="color: #104f1f;"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/ikhsan-asagaf/" class="text-decoration-none me-2" style="color: #007bff;"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
            <div class="card team-card text-center border-0 shadow-sm h-100 w-100">
                <div class="card-body d-flex flex-column">
                <img src="avatar-victor.png" alt="Lay Victor Adrian" class="rounded-circle img-fluid mx-auto mb-3 shadow-sm" style="width: 120px; height: 120px; object-fit: cover; border: 3px solid #6ebe77;">
                <h5 class="card-title fw-bold mb-1" style="color: #104f1f;">Lay Victor Adrian</h5>
                <p class="text-muted small mb-3">Front-end & Back-End Developer</p>
                <div class="mt-auto">
                    <a href="https://github.com/Vicganz04" class="text-decoration-none me-2" style="color: #104f1f;"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/lay-victor-adrian-294a66333/" class="text-decoration-none me-2" style="color: #007bff;"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
            <div class="card team-card text-center border-0 shadow-sm h-100 w-100">
                <div class="card-body d-flex flex-column">
                    <img src="/avatar-noven.jpg" alt="Y Noven Dhimas Nugroho" class="rounded-circle img-fluid mx-auto mb-3 shadow-sm" style="width: 120px; height: 120px; object-fit: cover; border: 3px solid #6ebe77;">
                    <h5 class="card-title fw-bold mb-1" style="color: #104f1f;">Y Noven Dhimas Nugroho</h5>
                    <p class="text-muted small mb-3">Front-end & Back-End Developer</p>
                    <div class="mt-auto">
                        <a href="https://github.com/venadd" class="text-decoration-none me-2" style="color: #104f1f;"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/y-noven-dhimas-nugroho/" class="text-decoration-none me-2" style="color: #007bff;"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            </div>
    `;
  }

  displayContent(containerElement) {
    if (containerElement) {
      containerElement.innerHTML = this._getAboutContentTemplate();
    } else {
      console.error(
        "Container element untuk AboutPage tidak ditemukan oleh View."
      );
    }
  }
}

export default AboutPage;
