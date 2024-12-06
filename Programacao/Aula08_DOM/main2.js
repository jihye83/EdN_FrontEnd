/** 
 * * Iniciando as variaveis do jogo  
**/
let num = Math.floor(Math.random() * 100) + 1;
let life = 7

const form = document.getElementById('guess-form')
const input = document.getElementById('guess-input')
const message = document.getElementById('message')
const lifesCount = document.getElementById('lifes-count')

form.addEventListener('submit', (e) => {
    e.preventDefault() //evita de recarregar a pagina
    const chute = parseInt(input.value);

    if (isNaN(chute) || chute < 1 || chute > 100) {
        message.textContent = 'Por favor, digite um numero valido de 1 a 100.';
        return;
    }

    if (chute === num) {
        message.textContent = 'Parabens!! Acertou.';
        message.style.color = 'green';
        form.querySelector('button').disabled = true;

    } else {
        life--;
        lifesCount.textContent = life;

        if (life === 0) {
            message.textContent = `Tente outra vez. o numero era ${num}`;
            message.style.color = 'red';
            form.querySelector('button').disabled = true;
        } else {
            if (chute > num) {
                message.textContent = `Dica: Escolha um numero menor, voce ainda tem ${life} chances`;
            } else {
                message.textContent = `Dica: Escolha um numero maior, voce ainda tem ${life} chances`
            }
            message.style.color = 'blue'
        }
    }
    input.value = ''
})