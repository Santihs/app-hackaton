import React from 'react'
import logo from '../ui/LOGOH.png'

export const Footer = () => {
    return (
        <footer>
            <div className="footer bg-primary text-white text-center">
                <p><img src={logo} className="ajustar" alt="" /> Pagina de Seguridad Online. - 2021 © Todos los derchos reservados.</p>
            </div>
        </footer>
    )
}
