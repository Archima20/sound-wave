import { BrowserRouter, Route, Routes } from "react-router-dom";
import SoundWave from "../pages/SoundWave";
import Discover from "../pages/Discover";
import Join from "../pages/Join";



export default function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SoundWave/>}/> 
            <Route path="/discover" element={<Discover/>}/>
            <Route path="/join" element={<Join/>}/>
           
        </Routes>
        </BrowserRouter>
    )
    
}
