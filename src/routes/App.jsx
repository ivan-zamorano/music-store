import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Carrito from '../containers/Carrito'
import Productos from '../containers/Productos'
import Error404 from '../containers/Error404'
import Layout from '../components/Layout'

const App = () => {
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/carrito" component={Carrito}></Route>
                <Route exact path="/productos" component={Productos}></Route>
                <Route exact path="" component={Error404}></Route>
            </Switch>
        </Layout>
        </BrowserRouter>
    )
}

export default App
