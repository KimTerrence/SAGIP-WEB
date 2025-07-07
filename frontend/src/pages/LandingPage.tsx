import Loading from "../components/Loading";
import SplashLogo from "../assets/splash.png";


export default function LandingPage(){
    return(
        <div className="bg-gray-100 h-screen w-screen flex justify-center items-center flex-col" >
            <img src={SplashLogo} alt="Logo" className=""/>
           <Loading></Loading>
        </div>
    )
}