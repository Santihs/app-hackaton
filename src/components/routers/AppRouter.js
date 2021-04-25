import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Navbar } from '../ui/Navbar';
import { Home } from '../ui/Home';
import { Formulario } from '../ui/Formulario';
import { Contacto } from '../ui/Contacto';
import { LoginFacebook } from '../login/LoginFacebook';

import logo from '../ui/LOGOH.png'
import { Footer } from '../footer/Footer';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <Switch>
                    <Route exact path="/formulario" component={Formulario} />

                    <Route exact path="/" component={Home} />

                    <Route exact path="/contacto" component={Contacto} />

                    <Route exact path="/login" component={LoginFacebook} />

                    <Redirect to="/" />
                </Switch>
                <Footer/>
            </div>
            
        </Router>
    )
}
