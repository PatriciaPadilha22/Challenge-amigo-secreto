//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
    alert ('Seja muito bem vindo(a) ao sortedor de amigo secreto!');

    let listaDeAmigosSorteados = [];
    let amigosJaSorteados = [];  //lista para nomes já sorteados

    function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
    }


    function exibirMensagemInicial(){
    exibirTextoNaTela('ul#listaAmigos', listaDeAmigosSorteados);
    }



     function  adicionarAmigo(){
            let nomesAmigos = document.querySelector('input#amigo').value;

            if (nomesAmigos === '') {
                alert ('Campo vazio, por favor, digite um nome válido!');
                return;
            }
            listaDeAmigosSorteados.push(nomesAmigos)
            exibirTextoNaTela('ul', listaDeAmigosSorteados.join('<br>'));
            
            console.log(nomesAmigos);
        } //função funcionando corretamente
        

    function sortearAmigo(){ 
    if (listaDeAmigosSorteados.length <2) {
        alert('É necessário pelo menos 2 amigos para realizar o sorteio');
        return;
    } do{
        // Escolhendo um amigo aleatório da lista
        let amigoAleatorio = Math.floor(Math.random()* listaDeAmigosSorteados.length);
        amigoNaoSorteado = listaDeAmigosSorteados[amigoAleatorio]; // nome sorteado
    } while (amigosJaSorteados.includes(amigoNaoSorteado)){
        amigosJaSorteados.push(amigoNaoSorteado); //Não repete o amigo já sorteado
        exibirTextoNaTela('ul#resultado',`Amigo sorteado: ${amigoNaoSorteado}`);
    }
}