async function loadPage(page) {
    const appRoot = document.getElementById('app-root');
    
    if (page === undefined || page === '') {
        page = 'home';
    }

    let pageTitle = "ONG Salve Vidas"; 

    document.querySelectorAll('.main-nav .nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    switch(page) {
        case 'home':
            pageTitle = "Início | ONG Salve Vidas";
            document.querySelector('.main-nav a[href="#home"]').classList.add('active');
            break;
        case 'projetos':
            pageTitle = "Projetos | ONG Salve Vidas";
            document.querySelector('.main-nav a[href="#projetos"]').classList.add('active');
            break;
        case 'cadastro':
            pageTitle = "Cadastro | ONG Salve Vidas";
            document.querySelector('.main-nav a[href="#cadastro"]').classList.add('active');
            break;
    }
    document.title = pageTitle;

    try {
        const response = await fetch(`pages/${page}.html`);
        
        if (!response.ok) {
            throw new Error('Página não encontrada');
        }
        
        const html = await response.text();
        appRoot.innerHTML = html;
        
        if (page === 'cadastro') {
            initializeForm();
        }
        
        if (page === 'home') {
            initializeTemplates();
        }
        
        if (page === 'projetos') {
            const openBtn = document.getElementById('open-modal-btn');
            const closeBtn = document.getElementById('close-modal-btn');
            const modal = document.getElementById('modal-doar');

            if (openBtn && modal) {
                openBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    modal.classList.add('is-open');
                });
            }
            if (closeBtn && modal) {
                closeBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    modal.classList.remove('is-open');
                });
            }
        }

    } catch (error) {
        document.title = "Erro 404 | ONG Salve Vidas";
        appRoot.innerHTML = `
            <div class="container" style="text-align: center;">
                <h2>Erro 404</h2>
                <p>A página que você buscou não foi encontrada.</p>
                <a href="#home" class="btn btn-primary">Voltar ao Início</a>
            </div>
        `;
    }
}

function handleNavigation() {
    const page = location.hash.substring(1);
    loadPage(page);
}

window.addEventListener('hashchange', handleNavigation);

document.addEventListener('DOMContentLoaded', () => {
    handleNavigation();
});