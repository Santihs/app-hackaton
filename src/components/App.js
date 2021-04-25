import React, { useState } from 'react'
import { UserContext } from '../hooks/useContext'
import { AppRouter } from './routers/AppRouter'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

    const [datos, setDatos] = useState({})

    return (

        <UserContext.Provider value={{
            datos,
            setDatos
        }}>
            <AppRouter />
            <ToastContainer/>
        </UserContext.Provider>
    )
}
