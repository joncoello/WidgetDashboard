(function () {
    var widget = {
        id: 0,
        name: 'Dashboard Widget',
        loadData: function (element) {
            $(element).find('button').click(function () {
                alert('hello widget');
            });
        },
        saveCustomisation: function (customisation) {
        },
        restoreCustomisation: function (customisation) {
        }
    };
    WidgetManager.Instance.registerWidget(widget);
})();
