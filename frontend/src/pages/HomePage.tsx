import Navbar from "../components/Navbar";
import TopPests from "../components/TopPests";

export default function HomePage(){
    return(
        <div>
            <Navbar/>
            <div className="px-20 pt-5">
                <TopPests/>
            </div>
              
        </div>
    )
}