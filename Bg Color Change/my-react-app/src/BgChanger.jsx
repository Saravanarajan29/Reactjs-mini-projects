import React,{useState} from "react";

const BgChanger = () => {

    const [color, setColor] = useState("black")

    return(
        
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

            <h4 className="flex flex-row m-2 text-white font-sans font-bold text-lg opacity-75">Click to change the background Color : </h4>

            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        
                <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black "
                style={{backgroundColor:"red"}}
                onClick={() => setColor("red")}>
                </button>
       
                <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black" 
                style={{backgroundColor:"green"}}
                onClick={() => setColor("Green")}>
                </button>

                <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black" 
                style={{backgroundColor:"blue"}}
                onClick={() => setColor("blue")}>
                </button>

            </div>

        </div>

    </div>
    );
}
export default BgChanger