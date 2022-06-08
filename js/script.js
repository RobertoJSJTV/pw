function validaEmail() {
  if (!document.fCadastro.txtEmail.value.includes("@")) {
    alert("E-mail Inválido, Por favor Digite um e-mail Válido");
  }
}

// Ao carregar a página verifica se está logado
window.onload = function(){
    if(localStorage.logado === 'true'){ 
    document.getElementById('registrar').text = localStorage.email;
    document.getElementById('logar').text = "Sair";
  }else{
  //  alert('Não está logado')
  }
}



// Atribui os Valores do formulário ao Local Storage
var cadastrar = function(){
  successCadastro();
  localStorage.setItem('nome', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('senha', document.getElementById('senha').value);
  localStorage.setItem(logado, false);

}

function successCadastro(){
  alert('Usuário Cadastrado! Faça Login com seu E-mail e Senha!');
  window.location.href = "index.html";
}

//[Modo Logar] Se não estiver logado, redireciona pra página de login
//[Modo Sair] Se estiver Logado, desloga
var logar = function(){
  if (document.getElementById('logar').text === 'Sair'){
    
    if (confirm('Deseja fazer logoff desta Conta?') == true){
      localStorage.logado = false;
      location.reload();
    }
  
  }else{
    window.location.href = "login.html";
  }
}




  var fazerLogin = function(){
  if (document.getElementById('email').value === localStorage.email &&
  document.getElementById('senha').value === localStorage.senha
  ){
     alert('Login Sucess')
     localStorage.logado = true;
  }else{
    alert('E-mail ou Senha incorreta')
    localStorage.logado = false;
  }
}









function exibir(){
  alert(
    'Nome: ' + localStorage.nome +
    '\nEmail: ' + localStorage.email + 
    '\nSenha: ' + localStorage.senha
    );
}