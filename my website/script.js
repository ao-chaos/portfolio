// Typewriter Effect for "Hi, I am a [physicist, photographer, creative]"
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const words = ['physicist', 'photographer', 'creative'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
        const currentWord = words[wordIndex];
        if (!isDeleting) {
            typingText.textContent = currentWord.slice(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Pause at the end of the word
            } else {
                setTimeout(type, 100); // Typing speed
            }
        } else {
            typingText.textContent = currentWord.slice(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Move to the next word
            }
            setTimeout(type, 50); // Deleting speed
        }
    };

    type();
}

// Loading Animation
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.querySelector('.content');
    const body = document.body;
  
    if (loadingScreen && content) {
        // Add "loading" class to body to disable scrolling
        body.classList.add('loading');
  
        // Hide loading screen after 1.5 seconds
        setTimeout(() => {
            loadingScreen.classList.add('hide');
            content.classList.add('show'); // Show main content
            body.classList.remove('loading'); // Remove "loading" class
            body.classList.add('loaded'); // Add "loaded" class to enable scrolling
        }, 1500);
    }
  });

// Smooth Scrolling for Anchor Links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Menu Animation on Hover
const logoMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

if (logoMenu && menu) {
    logoMenu.addEventListener('mouseenter', () => {
        menu.style.display = 'flex';
        menu.style.opacity = '1';
        menu.style.visibility = 'visible';
        menu.style.transform = 'translateX(0)';

        menuLinks.forEach((link, index) => {
            link.style.animation = `fadeInLeft 0.3s ease ${index * 0.1}s forwards`;
        });
    });

    logoMenu.addEventListener('mouseleave', () => {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translateX(-20px)';
        
        menuLinks.forEach((link) => {
            link.style.animation = 'none';
        });
    });
}