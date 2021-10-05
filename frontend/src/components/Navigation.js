import React, { Component } from 'react'
import './Navigation.css';
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container">
                    <img src="Avengers-Infiniti-War-Portada.jpg" alt=""/>
                    <Link className="navbar-brand" to="/" >
                        <i>NotesApp</i>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav offset-md-5">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Notas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Crear Nota</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user" className="nav-link">Crear Usuario</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
