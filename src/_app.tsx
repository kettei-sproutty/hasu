import React from 'react'
import Header from './components/layout/header'
import LoadingComponent from './components/loading'
import AppContext from './context'
import Routes from './router'
import './styles/index.scss'

const MyApp: React.FC = () => {
    return (
        <AppContext>
           <LoadingComponent />
           <Header />
           <Routes />
        </AppContext>
    )
}

export default MyApp