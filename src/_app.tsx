import React from 'react'
import ReactDOM from 'react-dom'
import browser from 'webextension-polyfill'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoadingComponent from './components/loading'
import AppContext from './context'
import Header from './components/layout/header'
import History from './pages/history'
import Home from './pages/home'
import './styles/index.scss'

const MyApp: React.FC = () => {
  return (
    <AppContext>
      <LoadingComponent />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppContext>
  )
}

browser.tabs
  .query({ active: true, currentWindow: true })
  .then(() => {
    ReactDOM.render(<MyApp />, document.getElementById('root'))
  })
  .catch(console.error)

