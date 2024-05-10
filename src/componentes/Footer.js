import React from "react";

const Footer = () => {
return(
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost">Registro Clientes y Proveedores</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="http://localhost">Home 2</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="http://localhost">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="http://localhost">Pricing</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="http://localhost">Action</a></li>
                        <li><a className="dropdown-item" href="http://localhost">Another action</a></li>
                        <li><a className="dropdown-item" href="http://localhost">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
)
}

export default Footer