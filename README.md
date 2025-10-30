Projeto HTML/CSS/JS - Atividades da ONG
Esse repositório contém as atividades de front-end do curso de ADS. O projeto foi dividido em três entregas: a estrutura com HTML5, a estilização com CSS3, e agora a interatividade com JavaScript.

A estrutura de pastas agora inclui js/ (para os scripts) e pages/ (para os pedaços de página).

Atividade 1 - Estrutura (HTML5)
O objetivo era criar um site simples para uma ONG, usando o que a gente aprendeu na matéria.

HTML Semântico: Usei as tags certas (<header>, <main>, <footer>, section, etc.) pra estruturar as páginas.

Formulário: Na página cadastro.html, eu usei os input do HTML5 (type="email", type="date") e a validação (required e pattern).

Imagens: Coloquei as imagens na pasta /imagens.

Máscaras (com JS): A atividade pedia máscara de CPF, CEP e Telefone. Como o HTML sozinho não faz isso, eu peguei um script de JavaScript na internet e coloquei no final do arquivo cadastro.html pra fazer as máscaras funcionarem.

Atividade 2 - Estilização (CSS3)
A segunda parte foi pegar o site "cru" da primeira entrega e deixar ele com cara de profissional usando CSS.

Design System: Criei um "Design System" com variáveis CSS (:root) para as cores, fontes e tamanhos. (Arquivo: base.css)

Site Responsivo: O site agora funciona no celular e computador (mobile-first). Usei CSS Grid pro layout principal e Flexbox pra alinhar as coisas.

Menu Hambúrguer: O menu vira um menu hambúrguer no celular (feito com o "truque" do checkbox com CSS, sem JS!).

Componentes: Estilizei todos os botões, cards, alertas e o modal.

Atividade 3 - Interatividade (JavaScript)
Essa foi a entrega final. O site deixou de ser estático e virou uma SPA (Single Page Application).

Lógica de SPA: O index.html agora é só um "shell" (esqueleto). O conteúdo das páginas (home.html, projetos.html, cadastro.html) é carregado da pasta /pages sem recarregar o site.

Código Modular: A atividade pedia para organizar o código por função, então eu criei a pasta js/ com:

router.js: O "cérebro" que faz a busca (fetch) e a troca das páginas.

main.js: Onde ficou o "sistema de templates" das notícias da home.

forms.js: Onde está toda a lógica de validação do formulário (o requisito principal da atividade), incluindo as máscaras e as mensagens de sucesso/erro.

Como abrir o site? (IMPORTANTE!)
Atenção: Você não pode mais só dar dois cliques no index.html!

Como o projeto agora é uma SPA e usa fetch (JavaScript) para carregar as páginas, o navegador bloqueia (por segurança, erro de "CORS") se você abrir direto do arquivo.

Ele precisa rodar de um servidor.

A forma mais fácil é usar a extensão "Live Server" no VS Code:

Instale a extensão "Live Server" (se ainda não tiver).

Clique com o botão direito no index.html (o que está na raiz do projeto).

Escolha "Open with Live Server".

Isso vai abrir no navegador com um endereço tipo http://127.0.0.1:5500 e vai funcionar perfeitamente.

Aluno: [Marcos Roberto Santana Pereira] Curso: ADS