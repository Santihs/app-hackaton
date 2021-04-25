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
    // console.log(denuncias

    useEffect(() => {
        localStorage.setItem('denuncias', JSON.stringify([]))
        setDenuncias(JSON.parse(data))
    }, [])

    const objectDatos = getObject(datos);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues.tipoDenuncia.length)
        if(formValues.tipoDenuncia.length > 2 && formValues.descripcionDenuncia.length > 2 && formValues.adjuntarLink.length > 5){
            if (objectDatos.id !== undefined) {
                const res = {
                    ...formValues,
                    ...objectDatos
                }
                if( denuncias !== null){
                    setDenuncias([...denuncias, res])
                    reset()
                    toast('Se ha añadido su denuncia se le contactará en 7 dias para comprobar la veracidad de la denuncia', {
                        type: 'success'
                    })
                } else {
                    setDenuncias(JSON.parse(data))
                }
                setIsVisible(false)
            }
            else {
                toast('Debe registrarse para llenar los dadtos', {
                    type: 'error'
                })
                setIsVisible(true);
            }
        } else {
            toast('Debe agregar datos válidos', {
                type: 'error'
            })
        }
        
    }

    return (
        <div className="container pt-4 animate__animated animate__fadeIn">
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
                            required
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
                            required
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
                            required
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
