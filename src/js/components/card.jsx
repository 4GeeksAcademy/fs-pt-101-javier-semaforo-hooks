import React, { useState } from "react";
import { SelectorDeCoche } from "./seleccionaCoche.jsx";


export const Card = () => {

    const [val, setVal] = useState('a')
    const [palo, setPalo] = useState(5)

    const palos = ['a', 'b', 'c', 'd']
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const generateValues = arr => arr[Math.floor(Math.random() * arr.length)]


    const handleClick = () => {
        setVal(generateValues(values))
        setPalo(generateValues(palos))
    }

    return (
        <>
        <SelectorDeCoche/>
            <div>
                <div>
                    {palo}
                </div>
                <div>
                    {val}
                </div>
                <div>
                    {palo}
                </div>
            </div>
            <button onClick={handleClick}>generate</button>
        </>
    )

}