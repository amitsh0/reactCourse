import { FC } from "react";
import "./RandomBackgroud.css";

export function RandomBackgroud(InnerComponent: FC): FC {
    
    function getRandomColor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    const style = {
        backgroundColor: getRandomColor()
    };
    
    return function(props: any){
        return (
            <div className="RandomBackgroud" style = {style}>
                <InnerComponent{...props}/>
            </div>
        );
    };
}
