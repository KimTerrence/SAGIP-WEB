
export default function Navbar(){
    return(
        <div className="flex justify-between lg:px-20 h-16 bg-gray-100 items-center">
            <div>
                <p>SAGIP</p>
            </div>
            <div className="flex gap-10 items-center">
                <a href="">About Us</a>
                <a href="">Download</a>
                <a href="">Contact </a>
                <button className="bg-green-600 px-5 py-2 rounded-sm text-gray-800">Login</button>
            </div>
        </div>
    )
}