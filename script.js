function toggleSolution() {
    const content = document.getElementById('solution');
    const btn = document.querySelector('button[onclick="toggleSolution()"]');
    
    if (content.classList.contains('spoiler-open')) {
        content.classList.remove('spoiler-open');
        btn.innerHTML = '<i class="fas fa-eye"></i> Ver Solución del Reto';
    } else {
        content.classList.add('spoiler-open');
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> Ocultar Solución';
    }
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('¡Código copiado al portapapeles!');
    });
}