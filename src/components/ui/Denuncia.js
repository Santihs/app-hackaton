import React from 'react'

export const Denuncia = ({ dato }) => {

    const {adjuntarLink, descripcionDenuncia, tipoDenuncia} = dato

    return (
        <div className="card text-white bg-primary mb-3 ml-1">
            <div className="card-header">{adjuntarLink}</div>
            <div className="card-body">
                <h4 className="card-title">{tipoDenuncia}</h4>
                <p className="card-text">{descripcionDenuncia}</p>
            </div>
        </div>
    )
}
