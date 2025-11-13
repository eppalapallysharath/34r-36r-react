import {Link} from "react-router-dom"

export const HomePage = () =>{
    return <div>
        <p>This is home page</p>
        <Link to="/contactus"> Contact us</Link>
    </div>
}