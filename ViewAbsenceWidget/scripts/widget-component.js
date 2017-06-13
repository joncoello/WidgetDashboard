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
        this.Widgets = new Array();
        this.Instances = new Array();
        this._lastWidgetID = 0;
        this._lastInstanceID = 0;
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
        this.Widgets.push(widget);
    };
    /**
     * Create an instance of a widget.
     * @param widget    the widget to register.
     */
    WidgetManager.prototype.createWidget = function (element, widgetName) {
        this._lastInstanceID++;
        var widget = this.Widgets.filter(function (w) { return w.name === widgetName; })[0];
        var instance = new WidgetInstance(this._lastInstanceID, widget, element);
        this.Widgets.push(widget);
        instance.widgetType.loadData(element);
    };
    /**
     * Refresh data of all widgets registered.
     */
    WidgetManager.prototype.refreshWidgets = function () {
        this.Instances.forEach(function (i) {
            i.widgetType.loadData(i.element);
        });
    };
    /**
     * Return layout of all widgets registered with manager.
     */
    WidgetManager.prototype.getLayout = function () {
        var widgetsInfo = [];
        this.Instances.forEach(function (i) {
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
