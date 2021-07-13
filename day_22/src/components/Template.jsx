export default function Template({ template , setMeme}) {
    return (
        <div className="template">
            <img src={template.url} alt={template.id} onClick={()=>{
                setMeme(template);
            }}></img>

        </div>
    )
}