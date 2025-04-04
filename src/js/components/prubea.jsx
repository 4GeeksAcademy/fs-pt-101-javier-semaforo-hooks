import React, { useState } from "react";

export const Prueba = () => {

    console.log('se renderizo prueba')

    const [name, setName] = useState('')

    return (
        <div>
            <p className="fs-1">componente prueba</p>
            <p className="fs-1">el nombre es {name}</p>
            <button onClick={()=>setName('pepe')}>pon Pepe de nombre</button>
        </div>
    )
}