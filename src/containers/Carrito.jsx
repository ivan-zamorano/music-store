import React, {useState, useEffect} from 'react'
import Seleccionado from '../components/Seleccionado'

const Carrito = () => {
    const [compra, setCompra] = useState(0)

    useEffect(()=>{
        let url = "https://music-store-ssd.herokuapp.com/productos"
        fetch(url)
        .then((response)=>response.json())
        .then((data)=> {
            let compra = localStorage.getItem('compras')
            let compraArray = compra.split(",")
            let seleccion = []
            for(let ite of compraArray){
                for (let prod of data){
                    if(prod.id===ite){
                        seleccion.push(prod)
                    }
                }
            }
            setCompra(seleccion)
        })
    })
    return (
        <>
        <h1>Carrito</h1>
            {compra.length > 0 && 
            compra.map((item, i) => <Seleccionado key={item.id+i} {...item}></Seleccionado>)
            }

        <form id="comprarCarrito" name="formularioCompra" method="post" action="https://music-store-zdw.000webhostapp.com/MercadoPago/" >
            <input name="idProducto" value="MusicStore" type="hidden" />
            <input name="producto" value="Productos" type="hidden" />
            <input name="precio" value="450" type="hidden" />
            <input name="imagen" value="" type="hidden" />
            <input name="uid" value="toto" type="hidden" id="uidx" />
            <label htmlFor="nombrex">Nombre</label> <br />
            <input name="nombre" type="text" id="nombrex"/> <br />
            <label htmlFor="emailx"></label> <br />
            <input name="mail" type="text" id="emailx"/> <br />
            <button type="submit">Comprar con MercadoPago</button>
        </form>
        </>
    )
}

export default Carrito
