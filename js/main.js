/*
    main.js
    Organização: Coloquei aqui a parte do "template"
    que o professor pediu, pra gerar as notícias na home.
*/

// 1. Os dados das notícias (como se viesse do banco de dados)
const newsData = [
    {
        id: 1,
        title: "Campanha do Agasalho 2025",
        content: "Nossa campanha de inverno começa semana que vem. Prepare suas doações de cobertores e agasalhos. Pontos de coleta em breve.",
        badge: "Novo"
    },
    {
        id: 2,
        title: "Voluntários da Sopa Solidária",
        content: "Atingimos a marca de 500 refeições distribuídas em uma única noite! Parabéns a todos os voluntários envolvidos.",
        badge: "Destaque"
    }
];

// 2. A função que cria o HTML de UM card de notícia
//    Ela recebe um item da lista 'newsData'
function createNewsTemplate(newsItem) {
    // Vê qual classe CSS usar pro badge (se é "Novo" ou "Destaque")
    const badgeClass = newsItem.badge === 'Novo' ? 'badge-new' : 'badge-featured';

    // Retorna o HTML do card, preenchido com os dados
    return `
        <div class="col-lg-6 col-md-12">
            <article class="card">
                <div class="card-content">
                    <span class="badge ${badgeClass}">${newsItem.badge}</span>
                    <h3>${newsItem.title}</h3>
                    <p>${newsItem.content}</p>
                </div>
            </article>
        </div>
    `;
}

// 3. A função que junta tudo e coloca na página
//    Essa função só roda quando a página HOME carrega
function initializeTemplates() {
    // Pega a DIV onde as notícias vão entrar
    const newsFeed = document.getElementById('news-feed');
    
    // Se a DIV existir...
    if (newsFeed) {
        let allNewsHtml = ''; // Começa uma string vazia
        
        // Passa por CADA item da lista 'newsData'
        newsData.forEach(item => {
            // Chama a função que cria o HTML e junta na string
            allNewsHtml += createNewsTemplate(item);
        });
        
        // Coloca o HTML de TODOS os cards dentro da DIV de uma vez só
        newsFeed.innerHTML = allNewsHtml;
    }
}