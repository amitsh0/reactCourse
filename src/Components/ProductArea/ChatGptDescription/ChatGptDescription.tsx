import { memo, useEffect, useState } from "react";
import { chatGptService } from "../../../Services/ChatGptService";
import { notify } from "../../../Utils/notify";
import "./ChatGptDescription.css";
import { Button } from "@mui/material";

type ChatGptDescriptionProps = {
	name: string;
};

export function ChatGptDescription(props: ChatGptDescriptionProps): JSX.Element {
    
    const [answer, setAnswer] = useState<string>("");

    function genarate(){
        setAnswer("⌚");
        chatGptService.chat("write me a brief description about" + props.name + "which is a product used by the legendary Northwind Traders company")
        .then(
            completion => {
                // console.log(props.name);
                setAnswer(completion);
                // console.log(answer);
            }
        )
        .catch(err=>notify.error(err));
    }

    function regenarate(){
        genarate();
    }

    
    useEffect(()=>{        
        if(!props.name) return
        genarate();
    }, [props.name])
    
    return (
        <div className="ChatGptDescription">
            {answer}
            <br/>
            <Button type = "button" onClick= {regenarate} color="primary" >Regenerate</Button>
        </div>
    );
}