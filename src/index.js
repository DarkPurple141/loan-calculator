import React from 'react'
import { render, hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import './index.css'
import Root from './containers/index'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')

const App = () => (
    <Provider store={store}>
        <Root />
    </Provider>
)

if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
