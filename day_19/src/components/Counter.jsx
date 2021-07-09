import { useState } from "react";
const Counter = () => {
    const [count, changeCount] = useState(0);
    return (
        <button onClick = {()=>{changeCount(count+ 1)}}>{count}</button>
    )
}

export default Counter;