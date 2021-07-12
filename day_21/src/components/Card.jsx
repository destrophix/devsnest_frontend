import { useState } from "react"
import EditButton from "./EditButton";
import DeleteButton from "./Delete.Button"
import DoneButton from "./DoneButton";
export default function Card ({name, calorie, items, setItems,index}){
    const [food,setFood] = useState(name)
    const [calo,setCalo] = useState(calorie)
    const [isEditing, setIsEditing] = useState(false)
    
    return (
            <div className="card">
                {!isEditing ? <div className="content"><h3>{name}</h3>
                <p>You have consumed {calorie} calories.</p></div>:<>
                <input type="text" id="title" name="title" value ={food} onChange={(e) => (setFood(e.target.value))}></input>
                <input type="number" id="calorie" name="calorie" value ={calo} onChange={(e) => (setCalo(e.target.value))}></input>
                </>
                }
                <DeleteButton items={items} setItems={setItems} index={index} />
                {!isEditing ? <EditButton isEditing={isEditing} setIsEditing={setIsEditing}/> : <DoneButton isEditing={isEditing} setIsEditing={setIsEditing} food={food} calo={calo} items={items} setItems={setItems} index={index} />}
                
            </div>
            
    )
}