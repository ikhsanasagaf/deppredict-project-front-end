import AboutPresenter from './about-presenter';

class AboutPage {
  constructor() {
    this._presenter = null;
    
    this._aboutImageUrl = '/anxiety.png';
    this._presenterName = "CC25-CF325";
  }

  
  async render() {
    return `
      <div id="about-page-content-area" class="about-page-content-area">
        </div>
    `;
  }

  async afterRender() {
    const aboutContentAreaElement = document.querySelector('#about-page-content-area');
    if (!aboutContentAreaElement) {
      console.error('Elemen #about-page-content-area tidak ditemukan!');
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
              <img src="${this._aboutImageUrl}" alt="Ilustrasi kecemasan atau depresi" class="img-fluid" style="max-width: 60%; height: auto; border-radius: 25px;">
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="about-text" style="color: #104f1f; font-size: 1.1rem; line-height: 1.7;">
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

      <div class="container py-5 mb-4" id="about-presenter-section">
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
    `;
  }

  displayContent(containerElement) {
    if (containerElement) {
      containerElement.innerHTML = this._getAboutContentTemplate();
    } else {
      console.error('Container element untuk AboutPage tidak ditemukan oleh View.');
    }
  }
}

export default AboutPage;