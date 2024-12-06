$('#enviar').on('click', function () {
    const title = $('#title').val()
    const body = $('#body').val()

    const data = {}
    data.title = title
    data.body = body

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (response) {
            $('#response').text(JSON.stringify(response, null, 2))
        },
        error: function (error) {
            $('#response').text('Erro ao enviar dados ' + error)
        }
    })
})