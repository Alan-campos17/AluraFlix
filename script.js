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

const jogos = [
    {
        titulo: "Ghost Rider",
        ano: 2007,
        genero: "Ação em terceira pessoa",
        plataformas: ["PlayStation 2", "PSP", "Game Boy Advance"],
        descricao: "Jogo de ação em terceira pessoa baseado no personagem da Marvel. Mistura combate terrestre com sequências de motocicleta.",
        desenvolvedor: "Climax Studios",
        publisher: "2K Games",
        classificacao: "T (Teen)",
        modoJogo: "Single-player"
    },
    {
        titulo: "God of War",
        ano: 2005,
        genero: "Ação e Aventura",
        plataformas: ["PlayStation 2"],
        descricao: "Jogo de ação e aventura baseado na mitologia grega. Conhecido por combate intenso e puzzles.",
        desenvolvedor: "Santa Monica Studio",
        publisher: "Sony Computer Entertainment",
        classificacao: "M (Mature)",
        modoJogo: "Single-player"
    },
    {
        titulo: "Midnight Club 3: DUB Edition",
        ano: 2005,
        genero: "Corrida",
        plataformas: ["PlayStation 2", "Xbox", "PSP"],
        descricao: "Jogo de corrida de rua em mundo aberto. Destaque para customização de veículos.",
        desenvolvedor: "Rockstar San Diego",
        publisher: "Rockstar Games",
        classificacao: "E (Everyone)",
        modoJogo: "Single-player, Multiplayer"
    },
    {
        titulo: "Need for Speed (série)",
        ano: "1994-presente",
        genero: "Corrida",
        plataformas: ["Múltiplas plataformas"],
        descricao: "Série de jogos de corrida focada em corridas de rua. Conhecida por perseguições policiais e customização de carros.",
        desenvolvedor: "Electronic Arts",
        publisher: "Electronic Arts",
        classificacao: "E (Everyone)",
        modoJogo: "Single-player, Multiplayer"
    },
    {
        titulo: "Black",
        ano: 2006,
        genero: "FPS (First Person Shooter)",
        plataformas: ["PlayStation 2", "Xbox"],
        descricao: "FPS com foco em destruição ambiental. Conhecido pelos gráficos avançados para a época.",
        desenvolvedor: "Criterion Games",
        publisher: "Electronic Arts",
        classificacao: "M (Mature)",
        modoJogo: "Single-player"
    },
    {
        titulo: "Resident Evil 4",
        ano: 2005,
        genero: "Survival Horror",
        plataformas: ["GameCube", "PlayStation 2"],
        descricao: "Jogo de survival horror que revolucionou o gênero. Introduziu a câmera sobre o ombro.",
        desenvolvedor: "Capcom",
        publisher: "Capcom",
        classificacao: "M (Mature)",
        modoJogo: "Single-player"
    }
];

function exibirJogos() {
    const container = document.getElementById('jogos-container');
    container.innerHTML = '';

    jogos.forEach(jogo => {
        const jogoElement = document.createElement('div');
        jogoElement.classList.add('jogo');
        jogoElement.innerHTML = `
            <h2>${jogo.titulo}</h2>
            <p><strong>Ano:</strong> ${jogo.ano}</p>
            <p><strong>Gênero:</strong> ${jogo.genero}</p>
            <p><strong>Plataformas:</strong> ${jogo.plataformas.join(', ')}</p>
            <p><strong>Desenvolvedor:</strong> ${jogo.desenvolvedor}</p>
            <p><strong>Publisher:</strong> ${jogo.publisher}</p>
            <p><strong>Classificação:</strong> ${jogo.classificacao}</p>
            <p><strong>Modo de Jogo:</strong> ${jogo.modoJogo}</p>
            <p><strong>Descrição:</strong> ${jogo.descricao}</p>
        `;
        container.appendChild(jogoElement);
    });
}

document.addEventListener('DOMContentLoaded', exibirJogos);