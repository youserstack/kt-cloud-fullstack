
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotSend = document.getElementById("chatbot-send");

chatbotSend.addEventListener("click", async () => {
    const userMessage = chatbotInput.value;
    if (userMessage.trim() !== "") {
        addMessage("user", userMessage);
        chatbotInput.value = "";

        try {
            const botMessage = await callChatAPI(userMessage);
            addMessage("bot", botMessage);
        } catch (error) {
            console.error("Error:", error);
            addMessage("bot", "Sorry, something went wrong.");
        }
    }
});

function addMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", `${sender}-message`);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

async function callChatAPI(message) {
    const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
    });

    if (!response.ok) {
        throw new Error("Failed to fetch from chat API");
    }

    const responseData = await response.json();
    return responseData.message;
}
