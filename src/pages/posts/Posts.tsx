import React, {useState} from 'react'

export const Posts =()=>{
    const [counter, setCounter] = useState(0)
    const handleIncrement=()=>{
        setCounter(counter + 1)
    }

    const handleDecrement=()=>{
        setCounter(counter - 1)
    }
    return(
        <div>
            <p>
                {counter}
            </p>

            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>

        </div>
    )
}