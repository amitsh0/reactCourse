import { LinkedIn } from "../LinkedIn/LinkedIn";
import { Song } from "../Song/Song";
import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">
			😁
            <LinkedIn/>
            <Song/>
        </div>
    );
}

export default About;