/*
    router.js
    Organização: Esse aqui é o "cérebro" do site agora.
    Ele que carrega as páginas sem recarregar tudo.
*/

// Função principal que carrega o conteúdo
// Ela recebe o nome da página (ex: 'home', 'projetos')
async function loadPage(page) {
    // Pega a tag <main id="app-root"> onde o conteúdo vai entrar
    const appRoot = document.getElementById('app-root');
    
    // Se não tiver nome de página (ex: primeira vez que entra), usa 'home'
    if (page === undefined || page === '') {
        page = 'home';
    }

    try {
        // Tenta buscar o arquivo HTML lá da pasta /pages/
        // O "await" espera a busca terminar
        const response = await fetch(`pages/${page}.html`);
        
        // Se não achou o arquivo (erro 404)...
        if (!response.ok) {
            // ...gera um erro pra cair lá no 'catch'
            throw new Error('Página não encontrada');
        }
        
        // Se achou, pega o texto (o HTML) de dentro do arquivo
        const html = await response.text();
        
        // Coloca esse HTML dentro do <main>
        appRoot.innerHTML = html;
        
        // --- PARTE IMPORTANTE: LIGAR OS SCRIPTS DA PÁGINA ---
        // Se a página carregada foi a de cadastro...
        if (page === 'cadastro') {
            // ...roda a função 'initializeForm' que tá lá no forms.js
            initializeForm();
        }
        
        // Se a página carregada foi a home...
        if (page === 'home') {
            // ...roda a função 'initializeTemplates' que tá no main.js
            initializeTemplates();
        }

    } catch (error) {
        // Se deu qualquer erro (ex: 404), mostra uma msg de erro
        appRoot.innerHTML = `
            <div class="container" style="text-align: center;">
                <h2>Erro 404</h2>
                <p>A página que você buscou não foi encontrada.</p>
                <a href="#home" class="btn btn-primary">Voltar ao Início</a>
            </div>
        `;
    }
}

// Função que roda quando clica num link ou usa as setas Voltar/Avançar
function handleNavigation() {
    // Pega o que vem depois do # na URL (ex: #projetos -> 'projetos')
    const page = location.hash.substring(1);
    // Chama a função principal pra carregar essa página
    loadPage(page);
}

// Fica "escutando" pra ver se o # da URL mudou
window.addEventListener('hashchange', handleNavigation);

// Quando o HTML inicial (index.html) termina de carregar...
document.addEventListener('DOMContentLoaded', () => {
    // ...chama a função de navegação pra carregar a primeira página (a 'home')
    handleNavigation();
});