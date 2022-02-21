import { useState } from "react";

const useCounter = (initialState = 1) => {
    const [counter, setCounter] = useState(initialState);

    const increment = (factor = 1) => {
        setCounter(counter + factor);
    };

    const decrement = (factor = 1) => {
        setCounter(counter - factor);
    };

    const handleReset = () => {
        setCounter(initialState)
    }
    
    return { counter, increment, decrement, reset: handleReset };
};

export default useCounter;
