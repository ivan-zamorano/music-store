import React from 'react'

const Categoria = (props) => {
    const {categoria, imagen} = props
    return (
        <>
            <div className="card-categorias">
                <div className="cat-img-wrapper">
                <img src={imagen[0].formats.small.url} alt="" />
                </div>
                <h4>{categoria}</h4>
            </div> 
        </>
    )
}

export default Categoria

