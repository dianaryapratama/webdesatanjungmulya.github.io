
  document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader-overlay');

    // Tangkap semua link navigasi yang menuju halaman lain
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // cegah pindah halaman langsung

        const href = this.getAttribute('href');

        // Tampilkan loader
        loader.style.display = 'flex';

        // Tambahkan efek fade out ke body supaya smooth
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '0.3';

        // Setelah delay, pindah ke halaman tujuan
        setTimeout(() => {
          window.location.href = href;
        }, 700); // 700ms delay supaya loading dan fade out terasa
      });
    });

    // Saat halaman sudah siap, kita fade in body
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    }, 100);
  });

