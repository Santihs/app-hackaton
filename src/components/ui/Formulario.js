import React from 'react'
import { useForm } from '../../hooks/useForm'
import { LoginFacebook } from '../../login/LoginFacebook';

export const Formulario = () => {

    const [formValues, handleInputChange, reset] = useForm({
        tipoDenuncia: '',
        descripcionDenuncia: '',
        adjuntarLink: '',
    })

    const { tipoDenuncia, descripcionDenuncia, adjuntarLink } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
        reset()
    }

    return (
        <div className="container">
            <form className="pt-4" onSubmit={ handleSubmit }>
                <fieldset className="card card-body">
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
                        {/* <LoginFacebook/> */}
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
