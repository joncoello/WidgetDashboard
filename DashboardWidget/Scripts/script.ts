(function () {

    let widget: WidgetComponent =
        {
            id: 0,
            name: 'Dashboard Widget',
            setupWidget: (element: Element) => {
                $(element).find('button').click(function () {
                    alert('hello widget');
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