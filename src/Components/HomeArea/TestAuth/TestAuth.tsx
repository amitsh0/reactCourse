import axios, { AxiosRequestConfig } from "axios";
import "./TestAuth.css";
import { notify } from "../../../Utils/notify";
import { AppState, store } from "../../../Redux/store";
import { useSelector } from "react-redux";
import { UserModel } from "../../../Models/UserModel";

export function TestAuth(): JSX.Element {

    const user = useSelector<AppState, UserModel>(store => store.user);

    async function test() {
        try{
            const response = await axios.get("http://localhost:3030/api/categories/");
            console.log(response.data);
        }
        catch(err: any){
            notify.error(err);
        }
    }

    async function testAdmin() {
        try{
            const response = await axios.get("http://localhost:3030/api/products/out-of-stock");
            console.log(response.data);
        }
        catch(err: any){
            notify.error(err);
        }
    }

    return (
        <div className="TestAuth">
			{user && <button onClick={test}>Test auth</button>}
            {user?.role === "Admin" && <button onClick={testAdmin}>Test Admin</button>}
        </div>
    );
}
