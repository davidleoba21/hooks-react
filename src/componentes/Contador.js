import React, { useState } from "react"

export const Contador = () => {
    
    const [number, setNumber] = useState(0)
    
    const sumar = () =>{
        setNumber(number+1)
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={() => setNumber(number-1)}>Restar</button>
            <button onClick={sumar}>Sumar</button>
        </div>
    )
} 