import React from 'react'

function Categorias() {
  return (
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Categories
    </div>

    <div className="table-responsive">
      


        <div class="row row-cols-1 row-cols-md-3 g-2" style={{padding:5, width:"90%", margin:"0 auto"}}>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Oro</h5>
                <p class="card-text"> TEXTO A REEMPLAZAR </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
              <h5 class="card-title">Plata</h5>
                <p class="card-text"> TEXTO A REEMPLAZAR </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Cobre</h5>
                <p class="card-text"> TEXTO A REEMPLAZAR </p>
              </div>
            </div>
          </div>
        </div>


      
    </div>
 
  </div>


  )
}

export default Categorias