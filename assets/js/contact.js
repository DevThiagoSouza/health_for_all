const form = document.querySelector("#form").addEventListener('submit', Enviar());

function Enviar(){
    let nome = document.getElementById("name")
    
    if(nome.value != ""){
        alert("'Obrigado sr(a) " + nome.value + " Entaremos em contato" )
    }


    Reload()
}


function Reload() {
    
    window.location.reload();

}