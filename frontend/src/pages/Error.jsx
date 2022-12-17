import React from 'react';
import { NavLink } from 'react-router-dom'

export const Error = () => {
    return (
        <main className="error-page">
            <h1>404</h1>
            <h2>Oups ! La page que vous demandez n'existe pas.</h2>

            <NavLink to="/" className="return-home">Retourner sur la page d'accueil</NavLink>
        </main>
    )
}

export default Error;