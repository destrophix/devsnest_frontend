import './App.css';
import {useArray} from './useArray'
import {useState} from 'react'
function App() {
  const todos = useArray(["buy milk","buy coffeee"]);
  const [item,setItem] = useState(null);
  return (
    <div className="App">
      <input value = {item} onChange={(e)=>{setItem(e.target.value); console.log(item);}}></input>
      <button onClick={(e)=>{
        todos.add(item);
        setItem("")
      }}>Add</button>
      <ul>
      {
        todos.values.map((todo,index) => {
           return (
           <li key={index}>{todo} <button onClick={()=>{todos.delete(index)}}>delete</button></li>
           )
        })
      }
      </ul>
      <button onClick={()=>{todos.clear()}}>Clear</button>
    </div>
  );
}

export default App;
