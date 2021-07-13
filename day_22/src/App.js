import {useState, useEffect} from 'react';
import Template from './components/Template';
import Meme from './components/Meme';
import './App.css';

function App() {
  const [templates, setTemplates] = useState([]);
  let [meme,setMeme] = useState(null);
  const [name,setName] = useState("amit");
  const [rollno,setRollno] = useState(34);
  
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(body => setTemplates(body.data.memes));
  },[])
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {meme === null ? (
        templates.map((template) => (
          <Template key={template.id} template={template} setMeme={setMeme} />
        ))
      ) : <Meme meme={meme} setMeme={setMeme}/>}
      
    </div>
  );
}

export default App;
