# Projeto ONG Salve Vidas (ADS - Entregas I, II, III e IV)

Esse repositório contém o projeto completo das 4 atividades de front-end do curso de ADS. O projeto evoluiu de um simples HTML para uma SPA (Single Page Application) completa, acessível e pronta para produção.

A estrutura de pastas final inclui `js/` (scripts modulares) e `pages/` (partes de HTML carregadas dinamicamente).

---

## Atividade I - Estrutura (HTML5)

O objetivo era criar um site simples para uma ONG, usando o que a gente aprendeu na matéria.

* **HTML Semântico:** Usei as tags certas (`<header>`, `<main>`, `<footer>`, `section`, etc.) pra estruturar as páginas.
* **Formulário:** Na página `cadastro.html`, eu usei os `input` do HTML5 (`type="email"`, `type="date"`) e a validação (`required` e `pattern`).
* **Máscaras (com JS):** A atividade pedia máscara de CPF, CEP e Telefone. Como o HTML sozinho não faz isso, eu peguei um script de JavaScript na internet e coloquei no final do arquivo `cadastro.html` pra fazer as máscaras funcionarem.

---

## Atividade II - Estilização (CSS3)

A segunda parte foi pegar o site "cru" da primeira entrega e deixar ele com cara de profissional usando CSS.

* **Design System:** Criei um "Design System" com **variáveis CSS** (`:root`) para as cores, fontes e tamanhos.
* **Site Responsivo:** O site agora funciona no celular e computador (mobile-first). Usei **CSS Grid** pro layout principal e **Flexbox** pra alinhar os componentes.
* **Menu Hambúrguer:** O menu vira um **menu hambúrguer** no celular (feito com o "truque" do checkbox com CSS, sem JS!).
* **Componentes:** Estilizei todos os botões, cards, alertas e o modal.

---

## Atividade III - Interatividade (JavaScript)

Essa foi a entrega que transformou o site em uma **SPA (Single Page Application)**.

* **Lógica de SPA:** O `index.html` agora é só um "shell" (esqueleto). O conteúdo das páginas (`home.html`, `projetos.html`, `cadastro.html`) é carregado da pasta `/pages` usando `fetch` sem recarregar o site.
* **Código Modular:** A atividade pedia para organizar o código por função, então eu criei a pasta `js/` com:
    * `router.js`: O "cérebro" que faz a busca (`fetch`) e a troca das páginas.
    * `main.js`: Onde ficou o "sistema de templates" das notícias da home.
    * `forms.js`: Onde está **toda** a lógica de validação do formulário (o requisito principal da atividade), incluindo as máscaras e as mensagens de sucesso/erro.

---

## Atividade IV - Acessibilidade, Otimização e Deploy

A entrega final focou em práticas profissionais.

* **Acessibilidade (WCAG AA):**
    * Corrigi o contraste das cores para passar no mínimo 4.5:1 (ex: o verde dos badges).
    * Adicionei estilos de `:focus` visíveis para **navegação completa por teclado** (pode testar usando a tecla TAB).
    * Implementei um **Modo Escuro Acessível**, que salva a preferência do usuário (use o seletor no cabeçalho).
* **Otimização:**
    * Todo o código CSS e JS foi preparado para **minificação** (remoção de espaços e comentários) para carregar mais rápido.
    * As imagens foram comprimidas (como a logo `logoindexcadastro.png`).
* **Versionamento (Git):**
    * Todo o trabalho final foi feito em uma `feature branch` separada.
    * O projeto usa **Commits Semânticos** (`feat:`, `fix:`, `build:`).
    * O fluxo de trabalho foi documentado usando **Issues** e um **Pull Request** (`PR`) para mesclar as mudanças no `main`.
    * O projeto final está marcado com uma **Release** (`v1.0.0`).

## Como abrir o site? (IMPORTANTE!)

**Atenção:** Você não pode mais só dar dois cliques no `index.html`!

Como o projeto agora é uma SPA e usa `fetch` (JavaScript) para carregar as páginas, o navegador bloqueia (por segurança, erro de "CORS") se você abrir direto do arquivo (`file:///`).

Ele **precisa** rodar de um servidor.

1.  **Recomendado: Live Server (VS Code)**
    * Instale a extensão "Live Server".
    * Clique com o botão direito no `index.html` (o que está na raiz do projeto).
    * Escolha "Open with Live Server".

2.  **Produção (GitHub Pages)**
    * O site também está publicado no GitHub Pages.
    * Link: https://marcosrsp.github.io/Entrega3InteratividadeeFuncionalidades/

---
**Aluno:** [Marcos Roberto Santana Pereira]
**Curso:** ADS
