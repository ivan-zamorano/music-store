import React from 'react'

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
        <h3>{marca}</h3>
        <h4>{modelo}</h4>
        <h5>{precio}</h5>
        <img src={imagen[0].formats.thumbnail.url} alt="" />
        <button onClick={handleClick}>Agregar al carrito</button>
        </>
    )
}

export default Producto
