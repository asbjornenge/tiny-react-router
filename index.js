const React = require('react')
const Route = require('route-parser')

class Router extends React.Component {
  constructor(props) {
    super(props)
    let routes = Object.keys(this.props.routes).map((route) => {
      return { route : new Route(route), handler : this.props.routes[route] }
    })
    this.state = { url : window.location.pathname, routes : routes }
  }
  render() {
    return this.getComponent() 
  }
  getComponent() {
    let url  = this.state.url == '' ? '/' : this.state.url
    return this.state.routes.reduce((def, route) => {
      let props = route.route.match(url)
      if (props) return this.createElement(route.handler, props)
      return def
    },React.createElement("div", null, "404 not found"))
  }
  createElement(Handler, props) {
    return React.createElement(Handler, Object.assign({}, this.props, props)) 
  }
  updateState() {
    if (this._mounted) this.setState({ url: window.location.pathname })
  }
  componentDidMount() {
    this._mounted = true
    window.addEventListener('popstate', this.updateState.bind(this))
  }
  componentWillUnmount() {
    this._mounted = false
    window.removeEventListener('popstate', this.updateState.bind(this))
  }
}

const nav = (path) => {
  if (path.indexOf('.') === 0) path = window.location.pathname + path.slice(1)
  history.pushState({}, '', path)
  const popStateEvent = new PopStateEvent('popstate', { state: {} })
  dispatchEvent(popStateEvent)
}

const getPath = () => {
  return window.location.pathname
}

module.exports = {
  Router,
  nav,
  getPath
}
