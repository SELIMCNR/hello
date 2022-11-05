import React, { useState } from 'react'

function Counter() {
    /*State oluşturma */
    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(1)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + amount)}>Arttırır</button>
            <hr />

            <div>
                Arttırma : {amount}
            </div>

            <button onClick={() => setCount(count + amount)}>+1</button>
            <button onClick={() => setCount(2 + (count + amount))}>+3</button>
            <button onClick={() => setCount(9 + (count + amount))}>+10</button>
        </div>

    )
}

export default Counter;
