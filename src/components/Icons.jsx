import microphone from "../assets/images/microphone.svg";
import albums from "../assets/images/albums.svg";
import more from "../assets/images/more.svg";

console.log(more);

export default function Icons(){
    return(
        <div className="icons">
             <div > 
                <img src={microphone} alt="Microphone" />
                <p className="text">Charts</p> 
             </div>

             <div >
                  <img src={albums} alt="Albums" />
                  <p className="text">Albums</p>
             </div>
                  
            <div >
                  <img src={more} alt="More" />
                  <p className="text">More</p>
            </div>
               
        </div>
       
    )
}