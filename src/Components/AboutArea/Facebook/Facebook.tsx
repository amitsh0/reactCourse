import { RandomBackgroud } from "../../SharedArea/RandomBackgroud/RandomBackgroud";
import "./Facebook.css";

function Facebook(): JSX.Element {
    return (
        <div className="Facebook">
			<span>
                Our facebook:
                <a href="https://www.facebook.com/northwind" target="_blank">https://www.facebook.com/northwind</a>
            </span>
        </div>
    );
}

export default RandomBackgroud(Facebook);