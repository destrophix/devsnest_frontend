
const Card = ({name,calorie}) => {
    return(
        <div className="card">
            <h1>{name}</h1>
            <h3>You have consumed {calorie} cals today.</h3>
        </div>
    )
}

export default Card;