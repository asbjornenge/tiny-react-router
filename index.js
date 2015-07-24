"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var assign = _interopRequire(require("react/lib/Object.assign"));

var Route = _interopRequire(require("route-parser"));

var Router = (function (_React$Component) {
    function Router(props) {
        var _this = this;

        _classCallCheck(this, Router);

        _get(Object.getPrototypeOf(Router.prototype), "constructor", this).call(this, props);
        var routes = Object.keys(this.props.routes).map(function (route) {
            return { route: new Route(route), handler: _this.props.routes[route] };
        });
        this.state = { url: window.location.hash.slice(1), routes: routes };
    }

    _inherits(Router, _React$Component);

    _prototypeProperties(Router, null, {
        render: {
            value: function render() {
                return this.getComponent();
            },
            writable: true,
            configurable: true
        },
        getComponent: {
            value: function getComponent() {
                var _this = this;

                var url = this.state.url == "" ? "/" : this.state.url;
                return this.state.routes.reduce(function (def, route) {
                    var props = route.route.match(url);
                    if (props) return _this.createElement(route.handler, props);
                    return def;
                }, React.createElement(
                    "div",
                    null,
                    "404 not found"
                ));
            },
            writable: true,
            configurable: true
        },
        createElement: {
            value: function createElement(Handler, props) {
                return React.createElement(Handler, _extends({}, this.props, props));
            },
            writable: true,
            configurable: true
        },
        updateState: {
            value: function updateState() {
                if (this._mounted) this.setState({ url: window.location.hash.slice(1) });
            },
            writable: true,
            configurable: true
        },
        componentDidMount: {
            value: function componentDidMount() {
                this._mounted = true;
                window.addEventListener("hashchange", this.updateState.bind(this));
            },
            writable: true,
            configurable: true
        },
        componentWillUnmount: {
            value: function componentWillUnmount() {
                this._mounted = false;
                window.removeEventListener("hashchange", this.updateState.bind(this));
            },
            writable: true,
            configurable: true
        }
    });

    return Router;
})(React.Component);

module.exports = Router;

