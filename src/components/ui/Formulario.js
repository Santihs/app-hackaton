import React, { useContext } from 'react'
import { getObject } from '../../helpers/getObject'
import { UserContext } from '../../hooks/useContext'
import { useForm } from '../../hooks/useForm'

export const Formulario = () => {

    const { datos } = useContext(UserContext)

    const [formValues, handleInputChange, reset] = useForm({
        tipoDenuncia: '',
        descripcionDenuncia: '',
        adjuntarLink: '',
    })

    const { tipoDenuncia, descripcionDenuncia, adjuntarLink } = formValues;

    const objectDatos = getObject(datos);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(datos.id !== null){
            const res = {
                ...formValues,
                ...objectDatos
            }
            console.log(res)
        }
        reset()
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

        </div>
    )
}
