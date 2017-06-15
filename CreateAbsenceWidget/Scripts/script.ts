(function () {

    let widget: WidgetComponent =
        {
            id: 0,
            name: 'Create Absence',
            setupWidget: (element: Element) => {
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
                    })

                    //$.post('http://localhost:14545/api/holiday', { dateRange: dateInput.val() }, () => {
                    //    WidgetManager.Instance.refreshWidgets();
                    //})
                });
            },
            loadData: (element: Element) => {
                
            },
            saveCustomisation: (customisation: { [id: string]: any }): void => {

            },
            restoreCustomisation: (customisation: { [id: string]: any }): void => {

            }
        };

    WidgetManager.Instance.registerWidget(widget);

})();