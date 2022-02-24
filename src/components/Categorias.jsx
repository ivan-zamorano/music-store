import React from 'react'
import "../statics/css/Categorias.css"
import Categoria from '../components/Categoria'
import {useState, useEffect} from 'react'

const Categorias = () => {

    let url = "https://music-store-ssd.herokuapp.com/categorias"
    const [categorias, setCategorias] = useState(0)
    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=> {
            setCategorias(data)
        })
    })

    return (
        <>
            <div className="categorias">
                <div className="container">
                    <h2>Categorías</h2>
                    <div className="grid-categorias">                   
                            {categorias.length > 0 && 
                            categorias.map((item, i) => <Categoria key={item.id} {...item}></Categoria>)
                            }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categorias
