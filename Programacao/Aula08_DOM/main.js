let pessoa_1 = {
    nome: 'Douglas',
    genero: 'M',
    peso: 86,
    engordar(peso) {
        this.peso += peso;
    },
    emagracer(peso) {
        this.peso -= peso;
    },
}

let pessoa_2 = {
    nome: 'Laura',
    genero: 'F',
    peso: 64,
    engordar(peso) {
        this.peso += peso;
    },
    emagracer(peso) {
        this.peso -= peso;
    },
}

let pessoa_3 = {
    nome: 'Thiago',
    genero: 'M',
    peso: 64,
    engordar(peso) {
        this.peso += peso;
    },
    emagracer(peso) {
        this.peso -= peso;
    },
}

/* console.log(pessoa_1)
console.log(pessoa_2)
console.log(pessoa_3)

pessoa_1.engordar(3)
console.log(pessoa_1)

pessoa_2.emagracer(10)
console.log(pessoa_2) */

const pessoas = [pessoa_1, pessoa_2, pessoa_3]

function renderPessoas() {
    const app = document.getElementById('app')
    app.innerHTML = '';

    pessoas.forEach((pessoa, index) => {
        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
        <h2>${pessoa.nome}</h2>
        <p>Genero: ${pessoa.genero}</p>
        <p>Peso: <span id="peso=${index}">${pessoa.peso.toFixed(1)} kg </span></p>
        <button onclick="alterarPeso(${index}, 5)">+5 kg</button>
        <button onclick="alterarPeso(${index}, -5)">-5 kg</button>
        `;
        app.appendChild(card)
    })
}

function alterarPeso(index, valor) {
    const pessoa = pessoas[index]

    if (valor > 0) {
        pessoa.engordar(valor)

    } else {
        pessoa.emagracer(-valor)
    }
    renderPessoas();
}

renderPessoas();