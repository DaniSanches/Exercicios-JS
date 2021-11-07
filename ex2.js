function validar(){
    var nome = cadastro.nome.value;
    var cpf = cadastro.cpf.value;
    var email = cadastro.email.value;
    var senha = cadastro.senha.value;
    var confirma = cadastro.confirma.value;

    if(nome==""){
        alert("Nome é OBRIGATÓRIO!!!!");
        cadastro.nome.focus();
        return false;
    }
        
    if(cpf==""){
        alert("CPF é de preenchimento OBRIGATÓRIO!!!!");
        cadastro.cpf.focus();
        return false;
    }
    
    if(cpf.length!=14){
        alert("CPF INVÁLIDO!!!!");
        cadstro.cpf.focus();
        return false;
    }
    
    if(email==""){
        alert("E-mail é de preenchimento OBRIGATÓRIO!!!!");
        cadastro.email.focus();
        return false;
    }
    
        
    if(senha==""){
        alert("Campo senha é de preenchimento obrigatório");
        cadastro.senha.focus();
        return false;
    }

    if(senha.length < 6 || senha.length > 10){
        alert(" A Senha deve ter no minimo 6 e no máximo 10 números!");
        cadstro.senha.focus();
        return false;
    }

    if(isNaN(senha)){
       alert(" A senha deve ter apenas números!!!!");
        cadastro.senha.focus();
        return false;
    }

         if(confirma==""){
        alert("É OBRIGATÓRIO confirmar a senha");
        cadastro.confirma.focus();
        return false;
    }
    if(confirma!=senha){
        alert("As senhas não conferem");
        cadastro.confirma.focus();
        return false;
    }



}


   

