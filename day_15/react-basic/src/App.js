import Button from "./Button.js";
import { useState } from "react";


function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const change = () => {
    if (buttonClicked) setButtonClicked(false);
    else setButtonClicked(true);
  };
  return (
   <div className="container">
      <h2>R eact without Tooling</h2>
      <p>This page demonstrates using React with no build tooling.</p>
      <p>React is loaded as a script tag.</p>
      {!buttonClicked ? <Button click={change} /> : "You liked this"}
    </div>
  );
}



export default App;
