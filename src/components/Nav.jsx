import logo from "../assets/images/logo.png";
import '../styles/Nav.css';
import { Outlet, Link } from "react-router-dom";

console.log(logo);

export default function Nav(){
    return(
        <><nav>
            <div className="header">
                <img src={logo} alt="Logo" />
                <ul >
                    <Link className="list sound" to="/">SoundWave</Link>
                    <Link className="list discover"  to="/discover">Discover</Link>
                    <Link className="list join" to="/join">Join</Link>
                </ul>

            </div>
        </nav><Outlet /></>
    )
}
