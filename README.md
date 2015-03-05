# tiny react router

Very basic and minimal (30 lines of es6) router for react.  
It just does the basics and is small enough for me to understand whats going on.  
You probably want to use [react-router](https://www.npmjs.com/package/react-router).

## Install

    npm install --save tiny-react-router

## Use

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

enjoy.
