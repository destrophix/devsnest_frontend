export default function Meme({ meme, setMeme }) {
    return (
        <div className="meme">
            <div className="template">
                <img src={meme.url} alt={meme.id}></img>
            </div>

            <div>
                {
                    [...Array(meme.box_count)].map((_,index)=>(
                        <input key={index} type="text" placeholder={`Meme Caption ${index+1}`}></input>
                    ))
                }
            </div>
            <div>
                <button >Create Meme</button>
                <button onClick={()=>{
                    setMeme(null);
                }}>Template</button>
            </div>
            
        </div>

    )
}