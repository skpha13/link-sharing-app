import { Link } from "react-router-dom";
const Navigation = () => {

    return(
        <div className="flex flex-row bg-black">
        <h2>DevLinks</h2>

        <Link to="/links">
            Links
        </Link>
        
        <Link to="/profile">
            Profile
        </Link>

        </div>
    )
}

export default Navigation;