document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. MOBILE NAVBAR CONTROLS ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");
        document.body.style.overflowY = navLinks.classList.contains("active") ? "hidden" : "auto";
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
            document.body.style.overflowY = "auto";
        });
    });

    // --- 2. THE VAULT EXPLOSION TRIGGER SYSTEM ---
    const toggleButton = document.getElementById("toggle-gallery-btn");
    const hiddenVault = document.getElementById("all-works-gallery");
    const buttonText = toggleButton.querySelector(".btn-txt-layer");
    const miniSticker = toggleButton.querySelector(".sticker-popup");

    toggleButton.addEventListener("click", () => {
        hiddenVault.classList.toggle("open");
        
        if (hiddenVault.classList.contains("open")) {
            buttonText.innerHTML = 'CLOSE ARCHIVED MATRIX WORK';
            miniSticker.innerHTML = "BOOM!!";
            miniSticker.style.background = "#fff200";
            miniSticker.style.color = "#000000";
            
            setTimeout(() => {
                hiddenVault.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        } else {
            buttonText.innerHTML = 'VIEW ALL ARCHIVED WORKS (<span class="count">7</span>)';
            miniSticker.innerHTML = "CLICK!!";
            miniSticker.style.background = "var(--accent-neon)";
            miniSticker.style.color = "white";
        }
    });

    // --- 3. SCROLL REVEAL ACTIVATOR ---
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- 4. PERSPECTIVE MOUSE PARALLAX FRAME SPEED ---
    const imageFrame = document.querySelector(".hero-image-frame");
    if(window.innerWidth > 768 && imageFrame) {
        document.addEventListener("mousemove", (e) => {
            const mouseX = (e.clientX / window.innerWidth) - 0.5;
            const mouseY = (e.clientY / window.innerHeight) - 0.5;
            
            imageFrame.style.transform = `
                rotateX(${mouseY * 12}deg) 
                rotateY(${mouseX * 12}deg) 
                translateY(${mouseY * -20}px)
            `;
        });
    }
});