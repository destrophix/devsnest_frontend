const Card = ({name,calorie,data,setData,index}) => {
    return(
        <div className="card">
            <div>
                <h1>{name}</h1>
                <button  className="btn" onClick={()=>{
                    let newData = data.filter((el,i)=> i !== index)
                    setData(newData);
                }}>Delete</button>
            </div>
            <h3>You have consumed {calorie} cals today.</h3>
        </div>
    )
}

export default Card;