function initializeForm() {
  
    const cpfInput = document.getElementById('cpf');
    
    if (cpfInput) {
        
        cpfInput.addEventListener('input', function (e) {
            
            let value = e.target.value.replace(/\D/g, ''); 
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
            e.target.value = value.slice(0, 14); 
        });
    }

    const telInput = document.getElementById('telefone');
    if (telInput) {
        telInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/, '($1) $2'); 
            value = value.replace(/(\d{5})(\d)/, '$1-$2'); 
            e.target.value = value.slice(0, 15); 
        });
    }

    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{5})(\d)/, '$1-$2'); 
            e.target.value = value.slice(0, 9); 
        });
    }

    const inputs = document.querySelectorAll("#cadastro-form .form-control");
    
    inputs.forEach(function(input) {
        
        input.addEventListener("blur", function() {
            
            input.classList.add("interacted");
        });
    });

    const form = document.getElementById("cadastro-form");
    
    if (form) {
        
        const successMessage = document.getElementById("success-message");
        const errorMessage = document.getElementById("error-message");
        
        const formTitle = document.getElementById("form-title");
        const formIntro = document.getElementById("form-intro");
        const formInfoAlert = document.getElementById("form-info-alert");

        form.addEventListener("submit", function(event) {
            
            event.preventDefault();

            if (form.checkValidity()) {
                
                form.style.display = "none";
                formTitle.style.display = "none";
                formIntro.style.display = "none";
                formInfoAlert.style.display = "none";
                errorMessage.style.display = "none"; 

                successMessage.style.display = "block";
                window.scrollTo(0, 0); 
            } else {
                
                errorMessage.style.display = "block";
                successMessage.style.display = "none"; 
                window.scrollTo(0, 0); 
            }
        });
    }
}