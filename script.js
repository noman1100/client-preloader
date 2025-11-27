window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const mainContent = document.querySelector('.main-content');
    const textContainer = document.querySelector('.text-container');
    
    const text = "Il calcio amatoriale vale più di quanto pensi";

    const words = text.split(' ');
    const initialDelay = 1; // Seconds to wait before text animation starts
    const wordAnimationDelay = 0.2; // Seconds between each word appearing
    const postAnimationHold = 2.5; // Seconds to hold after the last word appears

    // Clear any previous content
    textContainer.innerHTML = '';

    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.animationDelay = `${initialDelay + (index * wordAnimationDelay)}s`;
        textContainer.appendChild(span);
        // Add a space after each word
        textContainer.append(' ');
    });

    const totalAnimationTime = initialDelay + (words.length * wordAnimationDelay) + postAnimationHold;

    // Set a timeout to fade out the preloader
    setTimeout(() => {
        preloader.style.opacity = '0';
        
        // Listen for the transition to end before hiding the preloader and showing content
        preloader.addEventListener('transitionend', () => {
            preloader.style.display = 'none';
            mainContent.style.display = 'block';
            document.body.style.overflow = 'auto';
        }, { once: true }); // Ensure the event listener only runs once

    }, totalAnimationTime * 1000);
});