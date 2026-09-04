import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [massage, setMessage] = useState("start");

    function increaseCount() {
        setCount(count + 1);
    }
     
    function decreaseCount() {
        setCount(count - 1);
    }

    function resetCount() {
        setCount(0);
    }

    function changeMassage() {
        setMessage("changed");
    }

    return (
        <div>
            <h1>Counter App </h1>
            <h2>Count: {count}</h2>
            <h2>Message: {massage}</h2>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={changeMassage}>change Massage</button>

        </div>
    );
}

export default Counter;