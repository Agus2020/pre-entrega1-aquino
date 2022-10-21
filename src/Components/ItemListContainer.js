import { useState } from "react";
function ItemListContainer(props){
    const estado = useState(0)
    let contador = estado[0]
    const setContador = estado[1]

    let sumar = () => {
      setContador(contador + 1)
    }

    let restar = () => {
      setContador(contador-1)
    }
  

    return(
<>
<h6>{props.greeting}</h6>
{contador
  ? <h6>Usted actualmente tiene {contador} productos</h6>
  : <h6>Usted no tiene ningun producto, Vamos a comprar!</h6>
}
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card" style={{width:'22rem'}}>
      <img src="./god.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">God of War es un videojuego de acción-aventura desarrollado por SCE 
        Santa Monica Studio y publicado por Sony Interactive Entertainment. Su lanzamiento se produjo
        el 20 de abril de 2018 como un título exclusivo para la consola PlayStation 4.</p>
        {contador
          ? <button type="button" className="btn btn-danger" onClick={restar}>Borrar</button>
          : <button type="button" className="btn btn-success" onClick={sumar}>Agregar</button>
        }
        
        
      </div>
    </div>
  </div>
</div>
</>




    )
}
export default ItemListContainer;