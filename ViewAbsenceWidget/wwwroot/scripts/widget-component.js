/**
* Main component to be wrapped around widget element
*/
var WidgetComponent = (function () {
    /**
     * Register a widget with the manager.
     * @param element    The html element to attach the widget to.
     * @param settings    The settings including callbacks to be applied to the widget.
     */
    function WidgetComponent(element, settings) {
        this.element = element;
        this.settings = settings;
        settings.loadData(element);
    }
    return WidgetComponent;
}());
/**
* Widget settings including event callbacks
*/
var WidgetSettings = (function () {
    function WidgetSettings() {
    }
    return WidgetSettings;
}());
/**
* Singleton for managing widgets on a page widgets register themselves then can be centrally managed.
*/
var WidgetManager = (function () {
    function WidgetManager() {
        this._widgets = new Array();
    }
    Object.defineProperty(WidgetManager, "Instance", {
        /**
         * Singleton property
         */
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Register a widget with the manager.
     * @param widget    the widget to register.
     */
    WidgetManager.prototype.registerWidget = function (widget) {
        this._widgets.push(widget);
    };
    /**
     * Refresh data of all widgets registered.
     */
    WidgetManager.prototype.refreshWidgets = function () {
        this._widgets.forEach(function (w) {
            w.settings.loadData(w.element);
        });
    };
    /**
     * Return layout of all widgets registered with manager.
     */
    WidgetManager.prototype.getLayout = function () {
        var widgetsInfo = [];
        this._widgets.forEach(function (w) {
            var e = w.element.parentElement.parentElement;
            var id = w.element.id;
            var x = e.getAttribute('data-gs-x').valueOf();
            var y = e.getAttribute('data-gs-y').valueOf();
            var width = e.getAttribute('data-gs-width').valueOf();
            var height = e.getAttribute('data-gs-height').valueOf();
            widgetsInfo.push("id:" + id + ";x:" + x + ";y:" + y + ";width:" + width + ";height:" + height);
        });
        return widgetsInfo.join(",");
    };
    return WidgetManager;
}());
