import React from 'react'
import { Link} from 'react-router-dom'

function Administrador(props) {
    
 return (
        <>
            <div id="admin" style={{ textAlign: "left" }}>
                <strong className="h3">
                    Welcome : {props.username}
                </strong>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginTop: 20 }}>
                    <div className="container-fluid">
                        <label className="navbar-brand  h5" href=" ">Winners Olympics</label>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="" className="nav-link  h5  text-center">Winners</Link>
                                <Link to="" className="nav-link  h5  text-center">Categories</Link>
                                <a className="nav-link  h5  text-center" style={{ color: "blue" }} href=" "  >Cerrar Sesión</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default Administrador