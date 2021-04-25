import FacebookLogin from 'react-facebook-login';

import React, { useContext } from 'react'
import { UserContext } from '../../hooks/useContext';

export const LoginFacebook = () => {

    const { setDatos } = useContext(UserContext)

    const resopnseFacebook = (response) => {
        setDatos(response)
        console.log(response)
    }

    return (
        <div className="container pt-4">
            <FacebookLogin
                appId="997838757627601"
                fields="name,email,picture"
                callback={resopnseFacebook}
                textButton="Iniciar Sesión con Facebook"
            />

        </div>
    )
}
