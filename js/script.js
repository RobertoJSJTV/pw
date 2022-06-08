
// Verifca se está logado

window.onload = function(){

  // if (typeof(localStorage.email) !="undefined"){
    if(localStorage.logado === 'true'){ 
    document.getElementById('registrar').text = localStorage.email;
    document.getElementById('logar').text = "Sair";
  }else{
  //  alert('Não Tem E-mail')
  }

  // if (logado == true){
  //   document.getElementById('registrar').text = localStorage.email;
  //   document.getElementById('logar').text = "Sair";
  // }


}


function validaEmail() {
  if (!document.fCadastro.txtEmail.value.includes("@")) {
    alert("E-mail Inválido, Por favor Digite um e-mail Válido");
  }
}


var cadastrar = function (){
  successCadastro();
  localStorage.setItem('nome', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('senha', document.getElementById('senha').value);
  localStorage.setItem(logado, false);
}


var logar = function(){
  if (document.getElementById('logar').text === 'Sair'){
    alert ('Tchau')
    window.localStorage.removeItem('nome')
    window.localStorage.removeItem('email')
    window.localStorage.removeItem('senha')
    localStorage.logado = false;
    location.reload();
  
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






function successCadastro(){
  var r = confirm('Usuário Cadastrado! Faça Login com seu E-mail e Senha!');
  if (r == true){
    //Deveria Voltar Pra Index Esse Lixo
    window.location.href = "index.html";
  }
}


function exibir(){
  alert(
    'Nome: ' + localStorage.nome +
    '\nEmail: ' + localStorage.email + 
    '\nSenha: ' + localStorage.senha
    );
}