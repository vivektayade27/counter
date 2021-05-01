import React, { useState } from 'react'

export default function FourthCounter() {
    const [count, setCount] = useState(0); //Hooks - useState()

    return (
        <div>
            <h2>Hello FourthCounter</h2>
            <h3>{count}</h3>
            <button onClick={() => setCount(count+1)}>Inc</button>
            <button onClick={() => setCount(count-1)}>Dec</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}
