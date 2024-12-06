/* 
seleciona idbuscar do botao, evento click
requisicao GET
*/
$('#buscar').on('click', function () {
    $.ajax({
        // endereço do servidor para o qual a requisição será enviada
        url: 'https://reqres.in/api/users',
        method: 'GET',
        // função de callback que será executada quando a requisição for concluída com sucesso
        success: function (response) {
            $('#usuario-lista').empty()
            response.data.forEach(function (usuario) {
                const listaItem = $('<li>').text(
                    `${usuario.first_name} ${usuario.last_name}`
                )

                $('#usuario-lista').append(listaItem)
            })
        },
        error: function (error) {
            $('#usuario-lista').html('<li> Erro ao carregar os dados')
        }
    })
})