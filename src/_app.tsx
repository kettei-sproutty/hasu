import React from 'react'
import ReactDOM from 'react-dom'
import browser from 'webextension-polyfill'
import MyApp from './index'

browser.tabs
  .query({ active: true, currentWindow: true })
  .then(() => {
    ReactDOM.render(<MyApp />, document.getElementById('root'))
  })
  .catch(console.error)

