# tiny react router

Very small (30 lines of es6) and basic router for react.   
You probably want to use [react-router](https://www.npmjs.com/package/react-router).

## Install

```sh
npm install --save tiny-react-router
```

## Use

```js
import React  from 'react'
import { Router } from 'tiny-react-router'
import Home   from './screens/Home'
import Blog   from './screens/Blog'

let routes = {
    '/'         : Home,
    '/blog/:id' : Blog
}

React.render(
    <Router routes={routes} />,
    document.body
)
```

## Changelog

### 3.0.0

* Using history API and location.pathname instead of location.hash

### 2.0.0

* Major rewrite using ES6 features and no babel
* Exporting `{ Router, nav, getPath }` 
* No default export

### 1.0.2

* Removing event listener on componentWillUnmount and keeping track of mounted state
* Only trying to setState when mounted

### 1.0.1

* Using window.addEventListener instead of stealing window.onhashchange

### 1.0.0

* Initial release :tada:

enjoy.

