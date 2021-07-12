export default function EditButton ({isEditing,setIsEditing}){
    return (
        <button className="edit" onClick={()=>(setIsEditing(!isEditing))}>Edit</button>
    )
}