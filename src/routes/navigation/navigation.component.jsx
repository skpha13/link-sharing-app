import { Link } from "react-router-dom";
const Navigation = () => {

    return(
        <div className="flex flex-row bg-black">
        <h2>devlinks</h2>
        <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </div>
    )
}

export default Navigation;