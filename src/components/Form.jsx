import { Outlet, Link } from "react-router-dom";
import '../styles/Form.css';

export default function Form(){
    return(
        <>
            <div className="form-text">
                <>Join the <span className="fun"> fun.</span></>
                            
            </div>
            <form>
                <label for="name">Name: <br /><input id="name" type="text" required /></label> <br />
                <label for="email">Email: <br /><input id="email" type="email" required /></label> <br />
                <label for="new-password"> Password: <br />
                <input id="password" type="password" pattern="[a-z0-5]{8,}" required /></label> <br />
                <Link className="end" to ="/join">Join Now</Link>
            </form>

            <Outlet/>
        </>
    )
}
