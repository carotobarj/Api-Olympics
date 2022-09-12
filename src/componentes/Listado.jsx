import React from 'react'

function Listado() {
    return (
        <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

            <div className="h3">
                Winners
            </div>
            <div className="table-responsive">

                <>
                    <table className="table table-bordered table-hover" style={{ marginTop: 12 }}>
                        <thead className="text-center" style={{ background: "lightgray" }}>
                            <tr>    
                                <th>Atleta</th>
                                <th>Edad</th>
                                <th> País</th>
                                <th>Año</th>
                                <th>Fecha</th>
                                <th>Deporte</th>
                                <th>Oro</th>
                                <th>Plata</th>
                                <th>Bronce</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className="text-center align-baseline">

                        </tbody>
                    </table>
                </>

            </div>

        </div>

    )
}

export default Listado