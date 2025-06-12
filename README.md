# DepPredict - Aplikasi Web Prediksi Depresi Dini

![Screenshot DepPredict](https://imgur.com/a/nq8l9p1)

**DepPredict** adalah sebuah Progressive Web App (PWA) yang dirancang untuk membantu pengguna, khususnya mahasiswa, dalam melakukan deteksi dini terhadap gejala depresi. Aplikasi ini menyediakan formulir interaktif berdasarkan kriteria-kriteria yang terbukti secara ilmiah, dan memberikan hasil prediksi secara langsung di browser pengguna untuk menjaga privasi dan kecepatan.

Proyek ini merupakan bagian **Front-end** dari keseluruhan sistem DepPredict.

**Live Demo:** [deppredict.netlify.app](https://deppredict.netlify.app/)

---

## Fitur Utama

-   **Prediksi di Sisi Klien (In-Browser)**: Model Machine Learning dijalankan langsung di browser menggunakan TensorFlow.js, memastikan data pengguna tidak pernah meninggalkan perangkat mereka.
-   **Progressive Web App (PWA)**: Dapat di-install di perangkat mobile atau desktop dan berfungsi secara offline, memberikan pengalaman seperti aplikasi native.
-   **Antarmuka Responsif**: Didesain menggunakan Bootstrap agar nyaman digunakan di berbagai ukuran layar, dari desktop hingga mobile.
-   **Otentikasi Pengguna**: Sistem registrasi dan login yang aman menggunakan JSON Web Tokens (JWT) yang ditangani oleh back-end terpisah.
-   **Rute Terproteksi**: Halaman-halaman sensitif seperti formulir prediksi hanya bisa diakses setelah pengguna berhasil login.
-   **Transisi Halaman Mulus**: Menggunakan View Transitions API untuk memberikan efek animasi yang halus saat berpindah halaman.
-   **Notifikasi Interaktif**: Menggunakan SweetAlert2 untuk memberikan feedback yang jelas dan menarik kepada pengguna.

---

## Teknologi yang Digunakan

-   **Front-end**: HTML, CSS, JavaScript (ES6+)
-   **Framework CSS**: Bootstrap 5
-   **Bundler**: Webpack
-   **In-Browser Machine Learning**: TensorFlow.js
-   **Service Worker & Caching**: Workbox
-   **Notifikasi**: SweetAlert2

---

## Instalasi dan Setup Lokal

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

1.  **Prasyarat**
    -   Node.js (v18 atau lebih baru)
    -   NPM (biasanya sudah terinstal bersama Node.js)

2.  **Clone Repositori**
    ```bash
    git clone https://github.com/ikhsanasagaf/deppredict-project-front-end.git
    ```

3.  **Masuk ke Direktori Proyek**
    ```bash
    cd deppredict-project-front-end
    ```

4.  **Install Semua Dependency**
    ```bash
    npm install
    ```

5.  **Menjalankan Server Development**
    Perintah ini akan menjalankan aplikasi pada `http://localhost:9000` dengan *hot-reloading*.
    ```bash
    npm run start-dev
    ```

6.  **Membuat Build Produksi**
    Perintah ini akan membuat versi produksi yang teroptimasi di dalam folder `dist/`.
    ```bash
    npm run build
    ```

---

## Struktur Proyek

Proyek ini disusun dengan struktur yang modular untuk kemudahan perawatan:

-   `src/scripts/pages/`: Berisi logika untuk setiap halaman (Home, About, Predict, Login, dll.) dengan pola Presenter-View.
-   `src/scripts/components/`: Komponen UI yang dapat digunakan kembali, seperti tombol navbar.
-   `src/scripts/data/`: Berisi sumber data, termasuk logika untuk melakukan `fetch` ke API back-end.
-   `src/scripts/utils/`: Berisi utilitas pendukung seperti pendaftaran *Service Worker* dan manajemen token.
-   `src/scripts/globals/`: Untuk menyimpan konfigurasi global seperti URL API.
-   `src/public/`: Tempat menyimpan aset statis seperti gambar, ikon, dan file `manifest.json`.

---

## Repositori Terkait

Proyek DepPredict terdiri dari tiga bagian utama:

1.  **Front-end (Repositori Ini)**: Antarmuka pengguna yang Anda lihat.
2.  **Back-end**: API yang menangani otentikasi (login/register).
    -   [github.com/ikhsanasagaf/deppredict-project-back-end](https://github.com/ikhsanasagaf/deppredict-project-back-end)
3.  **Machine Learning**: Notebook dan model untuk melatih dan mengekspor model prediksi.
    -   [https://github.com/SofyanSaif/DepPredict-Capstone-Project.git](https://github.com/SofyanSaif/DepPredict-Capstone-Project.git)

---

Dibuat dengan ❤️ oleh **CC25-CF325**.
