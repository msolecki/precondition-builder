import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App htmlNuggetIds={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}/>, document.getElementById('root'))

serviceWorker.unregister()
