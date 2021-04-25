import React, { useState } from 'react'
import { UserContext } from '../hooks/useContext'
import { AppRouter } from './routers/AppRouter'

export const App = () => {

    const [datos, setDatos] = useState({})

    return (

        <UserContext.Provider value={{
            datos,
            setDatos
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
