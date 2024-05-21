import { useForm } from "react-hook-form";
import "./Login.css";
import { CredentialsModel } from "../../../Models/CredentialsModel";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../Utils/notify";
import { userService } from "../../../Services/UserService";
import { store } from "../../../Redux/store";

export function Login(): JSX.Element {
    
    const {register, handleSubmit, formState} = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try{
            await userService.login(credentials);
            notify.success("Welcome back " + store.getState().user.firstName);
            navigate("/home");
        }
        catch(err: any){
            notify.error(err);
        }
    }
    
    return (
        <div className="Login">
            <form onSubmit={handleSubmit(send)}>

                <label>Email:</label>
                <input type="email"{...register("email", CredentialsModel.emailValidation)} />
                <span className="error">{formState.errors?.email?.message}</span>

                <label>Password:</label>
                <input type="password"{...register("password", CredentialsModel.passwordValidation)} />
                <span className="error">{formState.errors?.password?.message}</span>

                <button>Login</button>
            </form>
        </div>
    );
}
