import { useState } from "react";

function UserInput() {
    const [name, setName] = useState("");
    const [displayName, setDisplayName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function showName() {
        setDisplayName(name);
    }

    function clearName() {
        setName("");
        setDisplayName("");
    }

    return (
        <div>
            <h1>User Input App</h1>

            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
            />

            <button onClick={showName}>
                Show Name
            </button>

            <button onClick={clearName}>
                Clear
            </button>

            <h2>Hello, {displayName}</h2>

            <p>Your input: {name}</p>
        </div>
    );
}

export default UserInput;