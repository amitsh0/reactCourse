import { useEffect } from "react";
import { chatGptService } from "../../../Services/ChatGptService";
import { notify } from "../../../Utils/notify";
import { useTitle } from "../../../Utils/UseTitle";
import { TestAuth } from "../TestAuth/TestAuth";
import { Vat } from "../Vat/Vat";
import "./Home.css";

export function Home(): JSX.Element {

    useTitle("Northwind Home");

    useEffect(()=>{
        chatGptService.chat("tell me a joke")
        .then(
            completion => console.log(completion)
        )
        .catch(err=>notify.error(err))
    }, [])
    
    return (
        <div className="Home">
            <TestAuth/>
            <Vat/>
        </div>
    );
}
