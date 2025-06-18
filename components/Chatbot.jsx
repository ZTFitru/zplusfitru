'use client'
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const getBotReply = (input) => {
  const text = input.toLowerCase()

  if (text.includes("who are you") || 
    text.includes("your name") || 
    text.includes("hi") || 
    text.includes("hello")
    ) {
    return "Hey there! I'm Z's assistant. Ask me about his skills or projects!"
    }

  if (
    text.includes("skills") || 
    text.includes("technologies") || 
    text.includes("stack")
    ) {
    return "Z is skilled in JavaScript, React, Tailwind, MongoDB, Next, and Express."
    }

  if (
    text.includes("project") ||
    text.includes("what have you built") ||
    text.includes("apps")
    ) {
    return "Z has built a blog application, a Harry Potter database, a movie database and many more!"
    }

  if (
    text.includes("experience") ||
    text.includes("background") ||
    text.includes("your story")
    ) {
    return "Z transitioned into tech after serving as a U.S. Army Communications Sergeant, then attended Strayer University and Turing School for software engineering."
  }

  if (
    text.includes("contact") ||
    text.includes("reach out") ||
    text.includes("email")
    ) {
    return "You can reach out via the contact form or click on 'Contact' button!"
    }

  if (text.includes("thank you") || text.includes("thanks")) {
    return "You're welcome! Let me know if you have any more questions."
    }

  return "Hmm, I'm not sure how to answer that yet — try asking about projects, skills, or Z's background!"
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatLog, setChatLog] = useState([
    {
      type: 'bot',
      text: "Hi there! I'm Z's portfolio assistant. Ask me anything about his work, skills, or background.",
    },
  ])
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = userInput.trim()
    if (!trimmed) return

    const botReply = getBotReply(trimmed);
    setChatLog((prev) => [
      ...prev,
      { type: 'user', text: trimmed },
      { type: 'bot', text: botReply },
    ]);
    setUserInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="bg-[#c66b3d] text-black flex justify-between items-center px-4 py-2">
            <span>Ask Me Anything</span>
            <button onClick={() => setIsOpen(false)} aria-label="Close Chat">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-64 overflow-y-auto p-3 space-y-2 text-sm">
            {chatLog.map((entry, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  entry.type === "user" ? "bg-[#7c8b58] text-right ml-auto" : "bg-gray-100 mr-auto"
                } max-w-[80%]`}
              >
                {entry.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex border-t">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full px-3 py-2 text-sm outline-none"
              placeholder="Ask about skills, projects..."
            />
            <button type="submit" className="bg-[#c66b3d] text-white px-4">
              Send
            </button>
          </form>
        </div>
      ) : (
        <button
          className="bg-[#c66b3d] text-white rounded-full p-3 shadow-lg hover:bg-[#a54f2d]"
          onClick={() => setIsOpen(true)}
          aria-label="Open Chat"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}

export default Chatbot;