let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length //3 count = contagem o código vai se adaptar automaticamente
let active = 0 //o active começa em 0 porque é o item que está  ativo no momento. quando passar pro outro lado o active vai mudando para outro item na tela. (0,1,2)

//arrow function, jeito moderno de escrever funções, função do tipo arrow (flecha)
next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active') // pra remover a classe que tá ativa e ir para um outro item.

    active = active >= count -1 ? 0 : active +1

    list [1].classList.add('active')

}
// Lógica de programação é entender o passo a passo
prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active') // pra remover a classe que tá ativa e ir para um outro item.

    active = active <= 0 ? count -1 : active -1

    list [1].classList.add('active')

}
