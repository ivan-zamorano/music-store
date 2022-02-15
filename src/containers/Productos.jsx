import React, {useState, useEffect} from 'react'
import Producto from '../components/Producto'
import "../statics/css/Productos.css"
import Filtros from '../components/Filtros'

const Productos = () => {
    let url = "https://music-store-ssd.herokuapp.com/productos"
    const [productos, setProductos] = useState(0)
    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=> {
            setProductos(data)
        })
    })
    
    return (
        <>
        <div className="productos-section-grid">
            <div className="filtros"><Filtros></Filtros></div>
            <div className="grid-productos">
                {productos.length > 0 && 
                productos.map((item, i) => <Producto key={item.id} {...item}></Producto>)
                }
            </div>
        </div>
            
        </>
    )
}

export default Productos
