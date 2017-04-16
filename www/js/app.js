$('.collection-item').on('click', function () {

    var $badge = $('.badge', this);

    if ($badge.length == 0) {
        $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
    }

    $badge.text(parseInt($badge.text()) + 1);

});

$('badge').on('click', function () {
    var nomeProduto = this.firstChild.textContent;
    Materialize.toast(nomeProduto + ' adicionado', 1000);
});

$('#confirmar').on('click', function () {

    var texto = '';

    $('.badge').parent().each(function () {
        var produto = this.firstChild.textContent;
        Materialize.toast(produto + ' adicionado', 1000);

        var quantidade = this.lastChild.textContent;

        texto += produto + ": " + quantidade + ", ";
    });

    $('#resumo').text(texto);
});

$('.modal-trigger').leanModal();

$('.collection').on('click', '.badge', function () {
    $(this).remove();
    return false;
});

$('.acao-limpar').on('click', function () {
    $('#numero-mesa').val('');
    $('.badge').remove();
});

$(".scan-qrcode").on('click', function () {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if (result.text) {
                Materialize.toast('Mesa ' + result.text, 2000);
                $('#numero-mesa').val(result.text);
            }
        },
        function (error) {
            Materialize.toast('Erro ' + error, 2000, 'red-text');
        }
    );
});