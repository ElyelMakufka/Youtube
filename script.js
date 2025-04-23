// Função para alternar entre fundo claro e escuro
function toggleTheme() {
    const body = document.body;

    // Alterna a classe 'light-theme' no body
    body.classList.toggle('light-theme');
}

// Adiciona um evento ao carregar a página para configurar o botão
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    // Verifica se o botão existe no HTML
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme); // Adiciona o evento de clique
    } else {
        console.error("O botão de alterar tema não foi encontrado no HTML.");
    }
});