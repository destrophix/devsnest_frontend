export default function DeleteButton ({items, setItems, index}){
    return (
        <button className="delete" onClick={()=>{
            let newItems = items.filter((item,i)=> i !== index )
            setItems(newItems);
        }}>Delete</button>
    )
}