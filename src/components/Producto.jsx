import React from 'react'
import "../statics/css/Producto.css"

const Producto = (props) => {
    const {marca, modelo,precio,imagen,id} = props
    const handleClick = () => {
        let compra = localStorage.getItem('compras')
        if (compra === null){
            compra = id
        }else{
            compra = compra+','+id
        }
        localStorage.setItem('compras', compra)
    }
    return (
        <>
        <div className="card-producto">
            <h3 className="prod-marca">{marca}</h3>
            <h4 className="prod-modelo">{modelo}</h4>
            
            <div className="prod-img-wrapper">
                <img src={imagen[0].formats.thumbnail.url} alt="" />
            </div>
            <h5 className="prod-precio">${precio}</h5>
            <button onClick={handleClick}>Agregar al carrito</button>
        </div>
        </>
    )
}

export default Producto
