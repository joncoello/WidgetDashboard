(function () {

    let widget: WidgetComponent =
        {
            id: 0,
            name: 'Create Absence',
            loadData: (element: Element) => {

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
                        data: { dateRange: dateInput.val() },
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function () {
                            WidgetManager.Instance.refreshWidgets();
                        }
                    })

                    //$.post('http://localhost:14545/api/holiday', { dateRange: dateInput.val() }, () => {
                    //    WidgetManager.Instance.refreshWidgets();
                    //})
                });

            },
            saveCustomisation: (customisation: { [id: string]: any }): void => {

            },
            restoreCustomisation: (customisation: { [id: string]: any }): void => {

            }
        };

    WidgetManager.Instance.registerWidget(widget);

})();