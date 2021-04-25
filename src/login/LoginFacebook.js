import FacebookLogin from 'react-facebook-login';

import React from 'react'

export const LoginFacebook = () => {

    const resopnseFacebook = (response) => {
        console.log(response)
    }

    return (
        <button className="btn">
            <FacebookLogin 
                appId = "997838757627601"
                fields="name,email,picture"
                callback={resopnseFacebook}
            />
        </button>
    )
}
