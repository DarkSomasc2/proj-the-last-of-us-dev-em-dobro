/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
*/

//  passo 1 - dar um jeito de pegar o elemento HTML dos botões
const carrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
carrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecao();
        // passo 4 - marcar o botão clicado como se estivesse selecionado
        selectButton(botao);
        // passo 5 - esconder a imagem anterior
        hideImage();
        // passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        showBackground(indice);
    })
})

function showBackground(indice) {
    imagens[indice].classList.add('ativa');
}

function selectButton(botao) {
    botao.classList.add('selecao');
}

function hideImage() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecao() {
    const botaoSelecao = document.querySelector('.selecao');
    botaoSelecao.classList.remove('selecao');
}
