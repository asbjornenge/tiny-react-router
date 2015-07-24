import React  from 'react'
import assign from 'react/lib/Object.assign'
import Route  from 'route-parser'

export default class Router extends React.Component {
    constructor(props) {
        super(props)
        let routes = Object.keys(this.props.routes).map((route) => {
            return { route : new Route(route), handler : this.props.routes[route] }
        })
        this.state = { url : window.location.hash.slice(1), routes : routes }
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
        },<div>404 not found</div>)
    }
    createElement(Handler, props) {
        return <Handler {...this.props} {...props} />
    }
    updateState() {
        if (this._mounted) this.setState({ url : window.location.hash.slice(1) })
    }
    componentDidMount() {
        this._mounted = true
        window.addEventListener('hashchange', this.updateState.bind(this))
    }
    componentWillUnmount() {
        this._mounted = false
        window.removeEventListener('hashchange', this.updateState.bind(this)) 
    }
}

