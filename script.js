// Função para assistir o vídeo
function watchVideo(videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

// Função para mostrar informações
function showInfo() {
    // Aqui você pode adicionar a lógica para mostrar as informações
    // Por exemplo, abrir um modal ou redirecionar para uma página de informações
    alert('Informações sobre o jogo');
    // ou
    // window.location.href = '/info.html';
}

// Para os cards de vídeo, você pode adicionar event listeners
document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoUrl = this.querySelector('.watch-btn').getAttribute('href');
            window.open(videoUrl, '_blank');
        });
    });
});

function showInfo() {
    window.location.href = 'informacao.html';
    // ou para nova aba:
    // window.open('informacao.html', '_blank');
    }