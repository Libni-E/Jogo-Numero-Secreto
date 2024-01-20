alert("Boas vindas ao jogo do numero secreto");
let numeroMaximo = 100 //parseInt(Math.random() * 200 + 1); //gerando o numero aleatorio para o multiplicador, então aleatoriamente cada partida pode ser mais dificil
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);//Gerando aleatoriamente o numero secreto
//console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto
while (numeroSecreto != chute ){

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //se chute for igual ao número secreto
    if (numeroSecreto == chute) {
        break;
    //utilizando concactenação 
    //console.log('Isso ai!! Você descobriu o número secreto ' + numeroSecreto);

     //alt Z corta a linha para ficar na mesma coluna

    //utlizando template strings
    //console.log(`Isso ai!! Você descobriu o numero secreto ${numeroSecreto}`);

    //Gerando o alerta
    //alert(`Isso ai!! Você descobriu o número secreto ${numeroSecreto} seu numero de tentativas foram ${tentativas}`);

    } else {
            if ( chute > numeroSecreto){
                alert(`O número secreto é menor que ${chute} `);
            }else{
                    if (chute < numeroSecreto){
                        alert(`Numero secreto é maior ${chute}`);
                     }

                }
                tentativas ++;
                
        
            }

    
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai!! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`);
// if(tentativas > 1 ){
//     alert(`Isso ai!! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativas`);
// }else{
//     alert(`Isso ai!! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativa`);
// }


    