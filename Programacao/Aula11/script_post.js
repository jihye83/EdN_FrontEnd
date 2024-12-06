
$('#enviar').on('click', function () {
    const name = $('#name').val()
    const job = $('#job').val()

    const data = {}
    data.name = name
    data.job = job

    $.ajax({
        url: 'https://reqres.in/api/users',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (response) {
            $('#response').text(JSON.stringify(response, null, 2))
        },
        error: function (error) {
            $('#response').text('Erro ao enviar dados.' + error)
        }
    })
})