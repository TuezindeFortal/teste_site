document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=DkVCb-81KFU&list=RDDkVCb-81KFU&start_radio=1';
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
    const btn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    
    const x = Math.random() * (container.clientWidth - btn.clientWidth);
    const y = Math.random() * (container.clientHeight - btn.clientHeight);
    
    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
});

