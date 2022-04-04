let jogador, vencedor = null;
const jogadorSelecionado = document.getElementById('jogador-selecionado');
const vencedorSelecionado = document.getElementById('vencedor-selecionado');
const quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado (id) {

    if(vencedor !== null)
        return;

    const quadrado = document.getElementById(id);

    if(quadrado.innerHTML !== '-')
        return;

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(checaVencedor())
        return;

    jogador === 'X' ? mudarJogador('O') : mudarJogador('X');
}

function mudarJogador (valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor (){
    if(
        checaSequencia(quadrados[0], quadrados[1], quadrados[2]) ||
        checaSequencia(quadrados[3], quadrados[4], quadrados[5]) ||
        checaSequencia(quadrados[6], quadrados[7], quadrados[8]) ||
        checaSequencia(quadrados[0], quadrados[3], quadrados[6]) ||
        checaSequencia(quadrados[1], quadrados[4], quadrados[7]) ||
        checaSequencia(quadrados[2], quadrados[5], quadrados[8]) ||
        checaSequencia(quadrados[0], quadrados[4], quadrados[8]) ||
        checaSequencia(quadrados[2], quadrados[4], quadrados[6])
    )
        return true;

    return false;
}

function checaSequencia (quadrado1, quadrado2, quadrado3){

    if(checaValores(quadrado1, quadrado2, quadrado3)){
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudaVencedor(quadrado1);
        return true;
    }

    return false;
}

function checaValores (quadrado1, quadrado2, quadrado3) {
    return quadrado1.innerHTML !== '-' && quadrado1.innerHTML == quadrado2.innerHTML && quadrado2.innerHTML == quadrado3.innerHTML;
}

function mudaCorQuadrado (quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f2';
    quadrado2.style.background = '#0f2';
    quadrado3.style.background = '#0f2';
}

function mudaVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function resetaJogo(){
    jogador = null;
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(let i = 0; i < 9; i++) {
       quadrados[i].innerHTML = '-';
       quadrados[i].style.background = '#b6e4e4'; 
       quadrados[i].style.color = '#b6e4e4';
    }

    mudarJogador('X');
}