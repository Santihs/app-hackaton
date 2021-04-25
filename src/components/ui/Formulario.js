import React from 'react'
import { useForm } from '../../hooks/useForm'

export const Formulario = () => {

    const [ formValues, handleInputChange ] =  useForm({
        tipoDenuncia: '',
        descripcionDenuncia: '',
        adjuntarLink: '',
    })

    const { tipoDenuncia, descripcionDenuncia, adjuntarLink } = formValues;

    return (
        <div className="container">
            <form className="mt-4">
                <fieldset className="card card-body">
                    <legend>Formulario</legend>
                    <label className="col-form-label">
                        Tipo Denuncia
                        <input
                            type="text"
                            placeholder="Tipo de Denuncia"
                            className = "form-control"
                            autoComplete = "off"
                            name = "tipoDenuncia"
                            onChange = { handleInputChange }
                            value = { tipoDenuncia }
                        />
                    </label>
                    <label className="col-form-label">
                        Descripción de la Denuncia
                        <input
                            type="text"
                            placeholder="Tipo de Denuncia"
                            className = "form-control"
                            autoComplete = "off"
                            name = "descripcionDenuncia"
                            onChange = { handleInputChange }
                            value = { descripcionDenuncia }
                        />
                    </label>
                    <label className="col-form-label">
                        Adjuntar Link de la Denuncia
                        <input
                            type="text"
                            placeholder="Tipo de Denuncia"
                            className = "form-control"
                            autoComplete = "off"
                            name = "adjuntarLink"
                            onChange = { handleInputChange }
                            value = { adjuntarLink }
                        />
                    </label>
                </fieldset>
            </form>
        </div>
    )
}
