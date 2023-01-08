import twitter from "../assets/images/twitter.svg";
import facebook from "../assets/images/facebook.svg";
import "../styles/Footer.css"

console.log(twitter);

export default function Footer(){
    return(
        <div className="footer">

            <ul className="list-footer">
                    <li>About us</li>
                    <li>Contact</li>
            </ul>
            <div className="container-footer">
              <div>
                 <img className="img-footer" src={twitter} alt="Twitter" />
                    <p className="text-footer">Twitter</p>  
              </div>   
              <div>
                 <img className="img-footer"  src={facebook} alt="Facebook" />
                    <p className="text-footer">Facebook</p>
              </div> 
             </div>
        </div>
       
    )
}
