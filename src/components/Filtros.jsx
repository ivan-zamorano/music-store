import React, {useEffect, useState} from 'react'
import Producto from './Producto'

const Filtros = () => {

    let url = "https://music-store-ssd.herokuapp.com/categorias"
    const [filtros, setFiltros] = useState(0)
    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=> {
            setFiltros(data)
        })
    })

    console.log(filtros)

    

    return (
        <>
            <h3>Filtros</h3>
            <ul>
                <li><input type="checkbox" />Test</li>
                <li><input type="checkbox" />Test</li>
                <li><input type="checkbox" />Test</li>
                <li><input type="checkbox" />Test</li>
                <li><input type="checkbox" />Test</li>
            </ul>
        </>
    )
}

export default Filtros
