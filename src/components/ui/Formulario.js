import React, { useContext, useEffect, useState } from 'react'

import { getObject } from '../../helpers/getObject'
import { UserContext } from '../../hooks/useContext'
import { useForm } from '../../hooks/useForm'

import { toast } from 'react-toastify'
import { LoginFacebook } from '../login/LoginFacebook'

export const Formulario = () => {

    const { datos } = useContext(UserContext)

    const [isVisible, setIsVisible] = useState(false)

    const [denuncias, setDenuncias] = useState([])

    const [formValues, handleInputChange, reset] = useForm({
        tipoDenuncia: '',
        descripcionDenuncia: '',
        adjuntarLink: '',
    })

    const { tipoDenuncia, descripcionDenuncia, adjuntarLink } = formValues;

    useEffect(() => {
        localStorage.setItem('denuncias', JSON.stringify(denuncias))
    }, [denuncias])


    let data = localStorage.getItem('denuncias')

    useEffect(() => {
        localStorage.setItem('denuncias', JSON.stringify([]))
        setDenuncias(JSON.parse(data))
    }, [])

    const objectDatos = getObject(datos);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (objectDatos.id !== undefined) {
            const res = {
                ...formValues,
                ...objectDatos
            }
            setDenuncias([...denuncias, res])
            reset()
            toast('Se ha añadido su denuncia se le contactará en 7 dias para comprobar la veracidad de la denuncia', {
                type: 'success'
            })
        }
        else {
            toast('Debe registrarse para llenar los dadtos', {
                type: 'error'
            })
            setIsVisible(true);
        }
    }

    return (
        <div className="container pt-4 ">
            <form className="card card-body bg-light" onSubmit={handleSubmit}>
                <fieldset className="card card-body bg-light">
                    <legend>Formulario</legend>
                    <label className="col-form-label">
                        Tipo Denuncia
                        <input
                            type="text"
                            placeholder="Tipo de Denuncia"
                            className="form-control"
                            autoComplete="off"
                            name="tipoDenuncia"
                            onChange={handleInputChange}
                            value={tipoDenuncia}
                        />
                    </label>
                    <label className="col-form-label">
                        Descripción de la Denuncia
                        <input
                            type="text"
                            placeholder="Descripción de la Denuncia"
                            className="form-control"
                            autoComplete="off"
                            name="descripcionDenuncia"
                            onChange={handleInputChange}
                            value={descripcionDenuncia}
                        />
                    </label>
                    <label className="col-form-label">
                        Adjuntar Link del Perfil
                        <input
                            type="text"
                            placeholder="Adjunte Link del Perfil"
                            className="form-control"
                            autoComplete="off"
                            name="adjuntarLink"
                            onChange={handleInputChange}
                            value={adjuntarLink}
                        />
                    </label>

                    <div className="modal-footer">
                        <button className="btn btn-primary">Enviar Denuncia</button>
                    </div>
                </fieldset>
            </form>


            {
                isVisible &&
                <div className="container card card-body mt-5">
                    <p className="card-header">Si desea poder registrar su denuncia inicie sesión con Facebook para poder notificar el proceso de su denuncia</p>
                    <LoginFacebook />

                </div>
            }

        </div>
    )
}
