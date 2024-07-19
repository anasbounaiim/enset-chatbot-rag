import { Button, TextField } from "@vaadin/react-components";
import { useState } from "react";
import { ChatAiService } from "Frontend/generated/endpoints";
import Markdown from "react-markdown";

export default function Chat() {
    const [question, setQuestion] = useState(""); // Simplified state initialization
    const [response, setResponse] = useState("");

    async function send() {
        if (question.trim() !== "") {
            try {
                const resp = await ChatAiService.ragChat(question);
                setResponse(resp);
            } catch (error) {
                console.error('Failed to fetch response:', error);
                setResponse("Error: Unable to retrieve response. Please try again later.");
            }
        }
    }

    // Handler to send message on pressing Enter
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            send();
        }
    }

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
            <h3>ChatBot</h3>
            <div>
                <TextField
                    label="Ask your question"
                    style={{ width: "80%", marginRight: '10px' }}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <Button onClick={send} theme="primary" style={{ height: '36px' }}>
                    Send
                </Button>
                <div style={{ marginTop: '20px', backgroundColor: '#f5f5f5', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                    <Markdown>
                        {response || "Type a question and press send to get a response."}
                    </Markdown>
                </div>
            </div>
        </div>
    );
}
