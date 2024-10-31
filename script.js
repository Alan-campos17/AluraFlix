// Função para alternar entre tema claro e escuro
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

// Efeito de destaque ao passar o mouse sobre os vídeos
const videoItems = document.querySelectorAll('.video-item');

videoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});