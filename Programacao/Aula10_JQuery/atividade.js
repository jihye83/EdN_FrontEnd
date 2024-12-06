$('#botao').on('click', function () {
    // Requisição AJAX para obter uma dica motivacional
    $.ajax({
        url: 'https://api.adviceslip.com/advice',
        method: 'GET',
        success: function (resposta) {
            // Transformando JSON em objeto
            // colocando na variavel dica
            const dica = JSON.parse(resposta);

            // Exibindo a dica na página
            // slip e dentro dela o advice que é a frase
            // {"slip": { "id": 168, "advice": "Do a bit more for your friends."}}
            $('#dicaMotivacional').html(`<p>Frase do Dia: "${dica.slip.advice}"</p>`);
        },
        error: function (erro) {
            console.error('Erro ao carregar a dica:', erro);
            alert('Não foi possível carregar a dica no momento.');
        }
    });
});
