import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import robotImage from "../assets/Robot.svg";
import { SendHorizonal } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import { nanoid } from "nanoid";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatBotPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [showIntro, setShowIntro] = useState(true);
  const messagesEndRef = useRef(null);

  const handleCardClick = (text) => {
    setInput(text);
  };

  const sendMessage = async (message) => {
    if (message.text.trim() === "") return;

    // Update the messages state to display the user's message
    setMessages((prevMessages) => [...prevMessages, message]);

    try {
      // Send the message to the backend using axios
      const response = await axios.post("http://localhost:5000/api/v1/chat-bot", {
        message: message.text,
      });

      // Log the response data
      console.log(response.data);

      // Update the messages state with the bot's response
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: nanoid(),
          isUserMessage: false,
          text: response.data.message, // Bot's response
        },
      ]);

      // If there are next questions, handle them accordingly
      if (response.data.nextQuestions) {
        console.log("Next Questions:", response.data.nextQuestions);
      }
    } catch (error) {
      console.error("Error in chatbot interaction:", error);
    }

    // Clear the input field and hide the intro section
    setInput("");
    setShowIntro(false); // Hide intro after the first message is sent
  };

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="p-2 w-[98%] lg:w-[96%] mx-auto mt-2 flex flex-col justify-center">
      <div className="min-h-fit text-white flex flex-col py-2 relative">
        {showIntro && messages.length === 0 && (
          <>
            <div className="mb-6 p-1 flex justify-center">
              <img src={robotImage} alt="Robot" className="h-20 w-20" />
            </div>

            <div className="w-full md:w-[96%] lg:w-[90%] mx-auto p-1 md:p-2 flex justify-between gap-1 space-x-2 text-balance mb-10">
              <div
                className="bg-[#00bfff] bg-opacity-30 p-1 md:p-2 lg:p-4 rounded-lg hover:bg-opacity-50 w-[34.5%] lg:w-[25%] md:w-[25%] transition ease-in-out duration-300 text-sm font-base lg:text-lg md:font-semibold shadow-2xl shadow-[#00FFAE] inset-10"
                onClick={() => handleCardClick("Your Personalized Learning Companion!")}
              >
                <p className="text-center">
                  <span className="text-[#DCECF2]">
                    Your{" "}
                    <span className="text-[#00FFAE]">Personalized</span> Learning{" "}
                    <span className="text-[#00FFAE]">Companion!</span>
                  </span>
                </p>
              </div>

              <div
                className="bg-[#00bfff] bg-opacity-30 p-1 md:p-2 lg:p-4 rounded-lg hover:bg-opacity-50 w-[34.5%] md:w-[25%] lg:w-[25%] transition ease-in-out duration-300 text-sm font-base md:font-semibold lg:text-lg shadow-2xl shadow-[#00FFAE] inset-10"
                onClick={() => handleCardClick("Where AI Meets Empathy for Meaningful Growth")}
              >
                <p className="text-center">
                  <span className="text-[#DCECF2]">
                    Where <span className="text-[#00FFAE]">AI</span> Meets{" "}
                    <span className="text-[#00FFAE]">Empathy</span> for Meaningful{" "}
                    <span className="text-[#00FFAE]">Growth</span>
                  </span>
                </p>
              </div>

              <div
                className="bg-[#00bfff] bg-opacity-30 p-1 md:p-2 lg:p-4 rounded-lg hover:bg-opacity-50 w-[34.5%] md:w-[25%] lg:w-[25%] transition ease-in-out duration-300 text-sm font-base md:font-semibold lg:text-lg shadow-2xl shadow-[#00FFAE] inset-10"
                onClick={() => handleCardClick("Understanding You, Enhancing Learning")}
              >
                <p className="text-center">
                  <span className="text-[#DCECF2]">
                    Understanding <span className="text-[#00FFAE]">You</span>, Enhancing{" "}
                    <span className="text-[#00FFAE]">Learning</span>
                  </span>
                </p>
              </div>
            </div>
          </>
        )}

        {/* Message Container */}
        {!showIntro && (
          <div className="h-[75vh] -mt-2 rounded-lg overflow-y-auto">
            <div className="w-[90%] md:w-[60%] mx-auto space-y-4 flex-1">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isUserMessage ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`p-3 rounded-lg md:text-lg text-sm ${
                      msg.isUserMessage
                        ? "bg-[#5E808DB5] text-gray-300"
                        : "bg-stone-800 text-wrap z-10 text-[#00bfff text-cyan-100 tracking-wider text-lg"
                    } max-w-[70%]`}
                  >
                    {/* Render the message as Markdown */}
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}

        <div className="fixed bottom-0 left-0 right-0 w-full flex justify-center bg-[#060E12]">
          <div className="flex w-[90%] md:w-[60%] mx-auto rounded-lg mb-4 bg-[#5E808DB5]">
            <TextareaAutosize
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  const message = {
                    id: nanoid(),
                    isUserMessage: true,
                    text: input,
                  };
                  sendMessage(message);
                }
              }}
              minRows={1}
              placeholder="Ask"
              className="w-full bg-transparent text-gray-300 p-4 rounded-lg border-none focus:outline-none"
            />

            <button
              className="relative right-2 p-2"
              onClick={() => sendMessage({ id: nanoid(), isUserMessage: true, text: input })}
            >
              <SendHorizonal className="text-[#060E12]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
