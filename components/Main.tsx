import exp from "constants";
import { FC, useState } from "react";

//prop interface goes here

const Main: FC = () => {
    const [getCounter, setCounter] = useState<number>(0);
    const [getHundreedCounter, setHundreedCounter] = useState<number>(100);
    //add -1 button
    //add another state starting value 100
    //Create three buttons that each affect 100 differently - side by side
    //add a text field and button to change the counter to the value in the field//optional
    return (
        <div>
            <h1>Main</h1>
            <div>
                <p>Counter: {getCounter}</p>
                <button onClick={() => {
                    setCounter(getCounter + 1)
                }}>Count!</button>

                <button onClick={() => {
                    setCounter(getCounter - 1)
                }}>Minus Count!</button>
            </div>
            <div>
                <p>Counter 100: {getHundreedCounter}</p>
                <button onClick={() => {
                    setHundreedCounter(getHundreedCounter * 5);
                }}>Multiply by 5</button>
                <button onClick={() => {
                    setHundreedCounter(getHundreedCounter - 15);
                }}>Minus 15</button>
                <button onClick={() => {
                    setHundreedCounter(100);
                }}>Reset</button>
            </div>


        </div>

    )
}

export default Main; 