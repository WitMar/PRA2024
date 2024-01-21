import React, {useEffect, useState} from 'react';
import useCustomExample from "../CustomExample/useCustomExample";

function StateExample() {
    const [count, setCount] = useState(0);
    const [refreshed, setRefreshed] = useState(0);
    const word = useCustomExample(count);

    useEffect(() => {    // Update the document title using the browser API    d
        setRefreshed(refreshed + 1);
        return () => {
            console.log("DESTROYED 1");
        }
    }, [count]);


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p></p>
            Odświeżono komponent state {refreshed} razy
            <p></p>
            {word}
        </div>
    );
}

export default StateExample;