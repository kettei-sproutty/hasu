import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import useLoading from '../context/loading/useLoading'

const Routes: React.FC = () => {

    const [, setLoading] = useLoading()

    React.useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <div>Home</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes