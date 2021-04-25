import React, { useEffect, useState } from 'react'
import { Denuncia } from './Denuncia'

export const Home = () => {

    const [datos, setDatos] = useState([])
    let data = localStorage.getItem('denuncias')

    useEffect(() => {
        if(data !== null)
            setDatos(JSON.parse(data))
    }, [data])

    useEffect(() => {
        if(data !== null)
            setDatos(JSON.parse(data))
    }, [])

    return (
        <div className="container text-white">
            <div className=" pt-5">
                {
                    datos?.map((dato, i) => <Denuncia key={i} dato={dato} />)
                }
            </div>
        </div>
    )
}
