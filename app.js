//alert("Boas vindas ao jogo do numero secreto");
//let numeroMaximo = 100 //parseInt(Math.random() * 200 + 1); //gerando o numero aleatorio para o multiplicador, então aleatoriamente cada partida pode ser mais dificil
//let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);//Gerando aleatoriamente o numero secreto
//console.log(numeroSecreto);
//let chute;
//let tentativas = 1;

//enquanto
// while (numeroSecreto != chute ){

//     chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

//     //se chute for igual ao número secreto
//     if (numeroSecreto == chute) {
//         break;
//     //utilizando concactenação 
//     //console.log('Isso ai!! Você descobriu o número secreto ' + numeroSecreto);

//      //alt Z corta a linha para ficar na mesma coluna

//     //utlizando template strings
//     //console.log(`Isso ai!! Você descobriu o numero secreto ${numeroSecreto}`);

//     //Gerando o alerta
//     //alert(`Isso ai!! Você descobriu o número secreto ${numeroSecreto} seu numero de tentativas foram ${tentativas}`);

//     } else {
//             if ( chute > numeroSecreto){
//                 alert(`O número secreto é menor que ${chute} `);
//             }else{
//                     if (chute < numeroSecreto){
//                         alert(`Numero secreto é maior ${chute}`);
//                      }

//                 }
//                 tentativas ++;
                
        
//             }

    
// }
// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
// alert(`Isso ai!! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`);
// if(tentativas > 1 ){
//     alert(`Isso ai!! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativas`);
// }else{
//     alert(`Isso ai!! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativa`);
// }
let tentativa = 1;
let numeroSecreto = gerarNumeroAleatorio();
function exibirTexto ( tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTexto('h2', 'Escolha um numero entre 1 a 100');
    exibirTexto('h1', 'Jogo do número secreto');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto, chute);
    if (chute == numeroSecreto){
        exibirTexto('h1', 'Acertou!!');
        let paralvraTentativa = tentativa > 1? 'tentativas' : 'tentativas';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${paralvraTentativa}`;

        exibirTexto('h2', mensagemTentativa );
        document.getElementById('reiniciar').removeAttribute('disabled');

        
    }else {
        if(chute > numeroSecreto){
            exibirTexto('h1', 'Errou!');
            exibirTexto('h2', 'O número secreto é menor')
        }else{
            exibirTexto('h1', "Errou!");
            exibirTexto('h2', 'O número secreto é maior')
        }
        tentativa ++;
        limparCampo();
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100 + 1);
}
