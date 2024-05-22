import { memo } from "react";
import "./DayPartIcon.css";

type DayPartIconProps = {
    hour: number;
};

function DayPartIcon(props: DayPartIconProps): JSX.Element {
    
    console.log(props.hour);

    let icon;
    if(props.hour >= 6 && props.hour <= 12) icon = "☕"
    else if(props.hour >= 13 && props.hour <= 18) icon = "🍗"
    else if(props.hour >= 19 && props.hour <= 23) icon = "☎"
    else icon = "😴"
    
    return (
        <div className="DayPartIcon">
			<span>{icon}</span>
        </div>
    );
}

export default memo(DayPartIcon);