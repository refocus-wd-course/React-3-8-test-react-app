import React, { useState } from 'react';


function Counter() {
    const [counter, setCounter] = useState(0);

    function handleIncrement() {
        setCounter(counter + 1);
    }

    function handleDecrement() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <label>Counter:</label>
            <p data-testid="counter">{counter}</p>
            <div>
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleDecrement}>-</button>
            </div>
        </div>
    );
}

export default Counter;