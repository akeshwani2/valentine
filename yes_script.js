function moveButton(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    
    const x = Math.random() * (containerRect.width - button.offsetWidth);
    const y = Math.random() * (containerRect.height - button.offsetHeight);
    
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function celebrate() {
    const container = document.querySelector('.hearts-container');
    
    for (let i = 0; i < 50; i++) {
        createHeart(container);
    }
    
    document.querySelector('.header_text').textContent = "YAYY!!";
}

function createHeart(container) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animation = `float ${Math.random() * 2 + 3}s linear forwards`;
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}