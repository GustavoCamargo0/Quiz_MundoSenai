function logar(){
    var user = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;

    if (user == "rin" && senha == 1000){
        alert("Acesso liberado");
    } else{
        alert("Acesso negado");
    }
}