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

function createNewsTemplate(newsItem) {
    
    const badgeClass = newsItem.badge === 'Novo' ? 'badge-new' : 'badge-featured';

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

function initializeTemplates() {
    
    const newsFeed = document.getElementById('news-feed');
    
    if (newsFeed) {
        let allNewsHtml = '';
        
        newsData.forEach(item => {
            
            allNewsHtml += createNewsTemplate(item);
        });
        
        newsFeed.innerHTML = allNewsHtml;
    }
}