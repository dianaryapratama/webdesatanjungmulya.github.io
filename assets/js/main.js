
        // Simple JavaScript for Mobile Menu Toggle
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('nav ul');
            
            menuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });
            
            // Close menu when clicking on a nav link
            const navLinks = document.querySelectorAll('nav ul li a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                });
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });

        
    

    // Sembunyikan loader ketika halaman tujuan telah dimuat (jika ingin loader hilang di infoperangkatdesa.html juga)
    window.addEventListener('load', function () {
        const loader = document.getElementById('loader-overlay');
        if (loader) {
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500); // 0.5 detik setelah load
        }
    });

    // Backup timeout maksimal (jika load gagal atau lama)
    setTimeout(() => {
        if (loader.style.display === 'flex') {
            loader.style.display = 'none';
        }
    }, 50000); // 50 detik


document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('page-loaded');
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleVisiMisi');
  const content = document.getElementById('visiMisiContent');
  const icon = toggleBtn.querySelector('i');

  toggleBtn.addEventListener('click', () => {
    const isShown = content.classList.toggle('show');
    content.hidden = !isShown;
    toggleBtn.setAttribute('aria-expanded', isShown);
    if (isShown) {
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
    } else {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
    }
  });
});


