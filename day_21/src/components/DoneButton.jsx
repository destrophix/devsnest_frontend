export default function DoneButton ({isEditing,setIsEditing,food,calo,items,setItems,index}){
    return (
        <button className="done" onClick={()=>{
            let updatedItem = {
                name: food,
                calorie: calo
            }
            let changedItems = [...items];
            changedItems.splice(index,1,updatedItem)
            setItems(changedItems);
            setIsEditing(!isEditing);
        }}>Done</button>
    )
}