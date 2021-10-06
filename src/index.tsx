import React from 'react'
import ReactDOM from 'react-dom'
import browser from 'webextension-polyfill'
import LoadingComponent from './components/loading'
import AppContext from './context'
import './styles/index.scss'

const MyApp: React.FC = () => {
    return (
        <AppContext>
           <LoadingComponent />
        </AppContext>
    )
}

browser.tabs.query({ active: true, currentWindow: true })
    .then(() => {
        ReactDOM.render(<MyApp />, document.getElementById('root'))
    })
    .catch(console.error);
