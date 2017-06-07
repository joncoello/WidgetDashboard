$('#refresh').click(function () {
    WidgetManager.Instance.refreshWidgets();
});

$('#getLayout').click(function () {
    $.get('/api/dashboard', function (data) {
        alert(data);
    })
});

$('#saveLayout').click(function () {
    var layout = WidgetManager.Instance.getLayout();
    $.post('/api/dashboard', { layout: layout }, function (data) {
        alert(data);
    })
});