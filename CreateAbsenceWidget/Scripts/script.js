(function () {
    var widget = {
        id: 0,
        name: 'Create Absence',
        loadData: function (element) {
            var dateInput = $(element).find('input[name="daterange"]');
            dateInput.daterangepicker({
                locale: {
                    format: 'DD/MM/YYYY'
                }
            });
            $(element).find('button').click(function () {
                $.ajax({
                    url: 'http://localhost:14545/api/holiday',
                    type: "POST",
                    data: JSON.stringify({ dateRange: dateInput.val() }),
                    contentType: "application/json",
                    dataType: "json",
                    success: function () {
                        console.log("success");
                    },
                    error: function () {
                        console.error("error");
                    },
                    complete: function () {
                        console.log("complete");
                        WidgetManager.Instance.refreshWidgets();
                    }
                });
                //$.post('http://localhost:14545/api/holiday', { dateRange: dateInput.val() }, () => {
                //    WidgetManager.Instance.refreshWidgets();
                //})
            });
        },
        saveCustomisation: function (customisation) {
        },
        restoreCustomisation: function (customisation) {
        }
    };
    WidgetManager.Instance.registerWidget(widget);
})();
