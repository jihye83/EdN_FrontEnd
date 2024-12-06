// https://cdnjs.com/libraries/jquery

// document.getElementById("title") - DOM
$('#title').css('color', 'red') // $ - seletor.

/* function mudar(){
    $('#result').text('Voce clicou no botao')
} */

const mudar = () => $('#result').text('Voce clicou no botao!')
let botao = $('#myButton')
botao.on('click', mudar)

$('#carregarDados').on('click', function () {
    // fazendo a requisicao AJAX para uma API publica
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function (resposta) {
            $('#listaUsuarios').empty()
            resposta.forEach(function (usuario) {
                $('#listaUsuarios').append(
                    `<li>${usuario.name} - ${usuario.email}</li>`
                )
            })
        },
        error: function (erro) {
            console.log('erro ao carregar os dados.', erro)
            alert('Nao foi possivel carregar os dados.')
        }
    })
})

