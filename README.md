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
import Router from 'tiny-react-router'
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

enjoy.

