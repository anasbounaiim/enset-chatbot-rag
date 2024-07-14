import {Button, TextField} from "@vaadin/react-components";
import {useState} from "react";
import {ChatAiService} from "Frontend/generated/endpoints";
import Markdown from "react-markdown";

export default function Chat(){
    const [question , setQuestion] = useState<string>("") // Change here
    const [response , setResponse] = useState<string>("") // And here

    async function send(){
        ChatAiService.ragChat(question).then(resp =>{
            setResponse(resp)
        })
    }

    return(
        <div>
            <h3>ChatBot</h3>
            <div>
                <TextField style={{width:"80%"}} onChange={(e => setQuestion(e.target.value))} />
                <Button onClick={send} theme="primary">Send</Button>
                <div>
                    <Markdown>
                    {response}
                    </Markdown>
                </div>
            </div>
        </div>
    )
}
