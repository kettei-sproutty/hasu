import React from 'react'
import { Switch, Route } from 'react-router-dom'
import History from '../../pages/history'
import Home from '../../pages/home'
import ErrorPage from '../../pages/error'
import AuthPage from '../../pages/auth/login'
import getPageRoute from './get-route'
import DetailsPage from '../../pages/details'

const Routes: React.FC = () => {

  return (
    <Switch>
      <Route exact path={[getPageRoute('home'), "/index.html"]}>
        <Home />
      </Route>
      <Route path={getPageRoute('login')}>
        <AuthPage />
      </Route>
      <Route path={getPageRoute('history')}>
        <History />
      </Route>
      <Route path={getPageRoute('error')}>
        <ErrorPage />
      </Route>
      <Route path={getPageRoute('details')} render={(props: any) => {
        return <DetailsPage {...props} />
      }}>
      </Route>
      <Route path="*">
        <ErrorPage message={'This page does not exists'} />
      </Route>
    </Switch>
  )
}

export default Routes
