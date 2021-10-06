import React from 'react'
import LoadingComponent from './components/loading'
import AppContext from './context'
import Routes from './router'

const MyApp: React.FC = () => {
    return (
        <AppContext>
           <LoadingComponent />
           <Routes />
        </AppContext>
    )
}

export default MyApp