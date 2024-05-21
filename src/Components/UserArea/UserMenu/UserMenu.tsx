import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { UserModel } from "../../../Models/UserModel";
import { AppState } from "../../../Redux/store";
import { userService } from "../../../Services/UserService";
import { notify } from "../../../Utils/notify";
import "./UserMenu.css";

export function UserMenu(): JSX.Element {
    
    const user = useSelector<AppState, UserModel>(store => store.user);
    const navigate = useNavigate();
    
    function logout(){
        userService.logout();
        notify.success("bye!!");
    }

    return (
        <div className="UserMenu">
			{
                !user && 
                <>
                    <span>Hello Guest |</span>
                    <NavLink to="/register">Register</NavLink>
                    <span>|</span>
                    <NavLink to="/login">Login</NavLink>
                </>
            }
            {
                user && 
                <>
                    <span>Hello {user.firstName} {user.lastName} |</span>
                    <NavLink to="/home" onClick={logout}>Logout</NavLink>
                </>
            }
        </div>
    );
}
