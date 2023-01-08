import '../styles/Nav.css';
import covers from "../assets/images/covers.jpg";
import Icons from '../components/Icons';
import  '../styles/BodyTwo.css';

console.log(covers);

export default function BodyTwo(){
   
    return(
        
    <>  
          <div className="body">
              <h2 className='body-two'>Discover new <br></br>music</h2> 
              <Icons/>
              <h4>By joining you can benefit by listening to the latest albums released</h4>
              <img className="album" src={covers} alt="Covers" />
          </div> 
    </>
    )
}

