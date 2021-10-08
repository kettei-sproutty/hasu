import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoadingComponent from './components/loading'
import AppContext from './context'
import Header from './components/layout/header'
import './styles/index.scss'
import Routes from './context/routes'

const MyApp: React.FC = () => {
  return (
    <AppContext>
      <LoadingComponent />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </AppContext>
  )
}

export default MyApp