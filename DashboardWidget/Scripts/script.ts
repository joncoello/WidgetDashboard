(function () {

    let widget: WidgetComponent =
        {
            id: 0,
            name: 'Dashboard Widget',
            loadData: (element: Element) => {
                $(element).find('button').click(function () {
                    alert('hello widget');
                });
            },
            saveCustomisation: (customisation: { [id: string]: any }): void => {
                
            },
            restoreCustomisation: (customisation: { [id: string]: any }): void => {
                
            }
        };
    
    WidgetManager.Instance.registerWidget(widget);

})();