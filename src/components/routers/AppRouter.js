import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { Navbar } from '../ui/Navbar';
import { Home } from '../ui/Home';
import { Formulario } from '../ui/Formulario';
import { Contacto } from '../ui/Contacto';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>

                <Switch>
                    <Route exact path="/formulario" component={ Formulario } />
                    
                    <Route exact path="/" component={ Home } />

                    <Route exact path="/contacto" component={ Contacto } />

                </Switch>
            </div>
        </Router>
    )
}
