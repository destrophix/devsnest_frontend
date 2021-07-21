import Context from "../Context"
import { useContext } from "react"
import {Redirect} from 'react-router-dom'
export default function Dashboard (){
    const userInfo = useContext(Context);
    return(
        <div className="content">
            {userInfo.loggedIn ? <h1>Dashboard: Private Route</h1> : <Redirect to="/"></Redirect>}

        </div>
    )
}