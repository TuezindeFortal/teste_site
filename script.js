document.getElementById('yesBtn').addEventListener('click', function() {
    // Redireciona para o YouTube com uma música romântica
    window.location.href = 'https://www.youtube.com/watch?v=nyuo9-OjNNg';
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
    const btn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    
    // Posição aleatória para o botão
    const x = Math.random() * (container.clientWidth - btn.clientWidth);
    const y = Math.random() * (container.clientHeight - btn.clientHeight);
    
    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
});

