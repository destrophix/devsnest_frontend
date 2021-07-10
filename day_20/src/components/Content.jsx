import Card from './Card';
import { useState } from 'react';


const Content = () => {
    const [data,setData] = useState([
        {name: "Pizza", calorie:"56"},
        {name: "Burger", calorie:"69"},
        {name: "Coke", calorie:"500"},
        {name: "Browne", calorie:"180"},
        {name: "Fried Rice", calorie:"90"},
        {name: "Pani Puri", calorie:"10"},
        {name: "Lassania", calorie:"200"}
    ])
    function Info(){
        if(data.length === 0)
            return <h1>No Entry</h1>
        else
            return <> </>
    }
    return (
        <div className="container">
            <h1 className="title">Calorie Read Only</h1>

            <div className="content">
                {
                    data.map((food, index)=>(
                        <Card key={index} name={food.name} calorie={food.calorie} data={data} setData={setData} index={index} />
                    ))
                }
                <Info />
            </div>

        </div>
    )
}

export default Content