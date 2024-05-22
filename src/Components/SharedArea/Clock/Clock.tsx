import { useEffect, useState } from "react";
import DayPartIcon from "../DayPartIcon/DayPartIcon";
import "./Clock.css";

export function Clock(): JSX.Element {
    
    const [time, setTime] = useState<string>();

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        })
    }, [])
    
    return (
        <div className="Clock">
			<span>{time}</span>
            <DayPartIcon hour = {new Date().getHours()}/>
        </div>
    );
}
