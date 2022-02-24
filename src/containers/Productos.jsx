<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
import Producto from "../components/Producto";
import "../statics/css/Productos.css";
import Filtros from "../components/Filtros";
import Context from "../context/Context";

const Productos = () => {
  const { display, getProductos, seleccion } = useContext(Context);

  useEffect(() => {
    getProductos();
  }, [seleccion]);

  return (
    <>
      <div className="productos-section-grid">
        <div className="">
          <Filtros></Filtros>
        </div>
        <div className="grid-productos">
          {display.map((item) => (
            <Producto {...item} key={item.id}></Producto>
          ))}
        </div>
      </div>
    </>
  );
};

export default Productos;
=======
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
>>>>>>> ad91d0c8a26ac6334a1fac5caff17ec11a96f7a3
