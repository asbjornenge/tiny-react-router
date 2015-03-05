# tiny react router

Very small (30 lines of es6) and basic router for react.   
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

# License

The MIT License (MIT)
Copyright (c) 2015 Asbjørn Enge


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.

