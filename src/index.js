import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './component/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux' //compose
import { Provider } from 'react-redux'
import postReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

//Redux Dev Tools
//const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)

const store = createStore(postReducer, composeWithDevTools(applyMiddleware()))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider >,
    document.getElementById('root')
)
registerServiceWorker()