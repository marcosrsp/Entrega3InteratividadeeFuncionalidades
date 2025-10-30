/*
    forms.js
    Organização: Coloquei aqui tudo que o formulário da página de cadastro faz.
*/

// Essa função 'initializeForm' só roda quando a página de cadastro carrega
function initializeForm() {
    
    // --- PARTE DAS MÁSCARAS (CPF, Telefone, CEP) ---
    // Pega o campo do CPF pelo ID dele
    const cpfInput = document.getElementById('cpf');
    // Se achou o campo...
    if (cpfInput) {
        // ...adiciona um "escutador" que roda toda vez que digitamos
        cpfInput.addEventListener('input', function (e) {
            // Esse código aqui eu peguei pronto pra fazer a máscara
            let value = e.target.value.replace(/\D/g, ''); 
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
            e.target.value = value.slice(0, 14); 
        });
    }

    // Mesma coisa pro Telefone
    const telInput = document.getElementById('telefone');
    if (telInput) {
        telInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/, '($1) $2'); 
            value = value.replace(/(\d{5})(\d)/, '$1-$2'); 
            e.target.value = value.slice(0, 15); 
        });
    }

    // Mesma coisa pro CEP
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{5})(\d)/, '$1-$2'); 
            e.target.value = value.slice(0, 9); 
        });
    }

    // --- PARTE DA VALIDAÇÃO (Borda verde/vermelha) ---
    // Pega TODOS os campos de input dentro do formulário
    const inputs = document.querySelectorAll("#cadastro-form .form-control");
    // Pra cada um deles...
    inputs.forEach(function(input) {
        // ...adiciona um "escutador" pra quando CLICAR FORA
        input.addEventListener("blur", function() {
            // Adiciona a classe 'interacted' pra CSS saber que já mexeu
            input.classList.add("interacted");
        });
    });

    // --- PARTE DA MENSAGEM DE SUCESSO/ERRO ---
    // Pega o formulário todo pelo ID
    const form = document.getElementById("cadastro-form");
    // Se achou o formulário...
    if (form) {
        // Pega as caixas de mensagem
        const successMessage = document.getElementById("success-message");
        const errorMessage = document.getElementById("error-message");
        
        // Pega as coisas que a gente vai esconder depois
        const formTitle = document.getElementById("form-title");
        const formIntro = document.getElementById("form-intro");
        const formInfoAlert = document.getElementById("form-info-alert");

        // Adiciona um "escutador" pra quando clicar no botão ENVIAR
        form.addEventListener("submit", function(event) {
            // Impede a página de recarregar 
            event.preventDefault();

            // O navegador mesmo checa se tá tudo preenchido certo
            if (form.checkValidity()) {
                // Se TUDO OK:
                // Esconde o formulário e os textos de cima
                form.style.display = "none";
                formTitle.style.display = "none";
                formIntro.style.display = "none";
                formInfoAlert.style.display = "none";
                errorMessage.style.display = "none"; // Garante que a mensagem de erro suma
                // Mostra a mensagem de sucesso
                successMessage.style.display = "block";
                window.scrollTo(0, 0); // Leva pro topo pra ver a mensagem
            } else {
                // Se FALTAR ALGO:
                // Mostra a mensagem de erro
                errorMessage.style.display = "block";
                successMessage.style.display = "none"; // Garante que a mensagem de sucesso suma
                window.scrollTo(0, 0); // Leva pro topo pra ver a mensagem
            }
        });
    }
}