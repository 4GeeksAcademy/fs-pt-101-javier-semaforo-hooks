import React, { useState } from "react";


export const SelectorDeCoche = () => {


    const [selected, setSelcted] = useState('');


    const data = [
        { model: 'corolla', year: 2005, color: 'white' },
        { model: 'aigo', year: 2000, color: 'black' },
        { model: '500', year: 2008, color: 'green' }
    ]

    const handleClick = (car) => {
        console.log('click')
        setSelcted(car)
    }

    return (
        <>
            <h2>Selecciona coche</h2>
            <div className="d-flex justify-content-center">

                {data.map((el, i) =>
                    <div key={i} className={`p-3 mx-4 ${selected == el.model ? 'bg-success' : 'bg-light'}`}>
                        <h3>{el.model}</h3>
                        <p>{el.year}</p>
                        <p>{el.color}</p>
                        <button onClick={() => handleClick(el.model)}>select</button>
                    </div>
                )}



            </div>
            <div>
                <h3>Seleccionaste</h3>
                <p className="fs-2">{selected}</p>
            </div>
        </>
    )

}