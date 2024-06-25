let lsitaDeNumerosSorteados = [];
let numeroSecreto = gerarNumero();
let tentativas = 1;
let numeroLimite = 10;




function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;   
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto')
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            if (chute > numeroSecreto) { exibirTextoNaTela ('p', '0 número secreto é menor');
            } else {
                    exibirTextoNaTela('p', 'O número secreto é maior');
            }
            tentativas++;
            limparCampo();
    }

}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}


function limparCampo(){
    let chute = document.querySelector('input');
    chute.value =' ';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);  
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
        }
    if (lsitaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        lsitaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}



