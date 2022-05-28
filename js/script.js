function validaEmail(){
    if (!document.fCadastro.txtEmail.value.includes("@")) {
        alert("E-mail Inválido, Por favor Digite um e-mail Válido");
    }
}