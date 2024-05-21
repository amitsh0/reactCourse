import { useContext } from "react";
import "./LinkedIn.css";
import { MiniThemeContext } from "../../../Utils/MiniTheme";

export function LinkedIn(): JSX.Element {

    const theme = useContext(MiniThemeContext);

    return (
        <div className="LinkedIn" style={theme}>
			<p>LinkedIn page: https://www.Linkedin.com/northwind</p>
        </div>
    );
}
