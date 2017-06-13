/**
* Widget settings including event callbacks
*/
var WidgetComponent = (function () {
    function WidgetComponent(name) {
        this.name = name;
    }
    return WidgetComponent;
}());
/**
* An individual instance of a widget on a dashboard
*/
var WidgetInstance = (function () {
    function WidgetInstance(id, widgetType, element) {
        this.id = id;
        this.widgetType = widgetType;
        this.element = element;
    }
    return WidgetInstance;
}());
/**
* Singleton for managing widgets on a page widgets register themselves then can be centrally managed.
*/
var WidgetManager = (function () {
    function WidgetManager() {
        this._widgets = new Array();
        this._instances = new Array();
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
        this._lastWidgetID++;
        widget.id = this._lastWidgetID;
        this._widgets.push(widget);
    };
    /**
     * Create an instance of a widget.
     * @param widget    the widget to register.
     */
    WidgetManager.prototype.createWidget = function (element, widgetID) {
        this._lastInstanceID++;
        var widget = this._widgets.filter(function (w) { return w.id === widgetID; })[0];
        var instance = new WidgetInstance(this._lastInstanceID, widget, element);
        this._widgets.push(widget);
        instance.widgetType.loadData(element);
    };
    /**
     * Refresh data of all widgets registered.
     */
    WidgetManager.prototype.refreshWidgets = function () {
        this._instances.forEach(function (i) {
            i.widgetType.loadData(i.element);
        });
    };
    /**
     * Return layout of all widgets registered with manager.
     */
    WidgetManager.prototype.getLayout = function () {
        var widgetsInfo = [];
        this._instances.forEach(function (i) {
            var e = i.element.parentElement.parentElement;
            var id = i.element.id;
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
