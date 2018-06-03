import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/app'
import createStoreWithMiddleware from './store'

ReactDOM.render(<Provider store={createStoreWithMiddleware}><App/></Provider>,document.querySelector('.container'))
