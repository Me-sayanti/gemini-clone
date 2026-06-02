import { createContext, useEffect, useState } from "react";
import { askGemini } from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [resultData, setResultData] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Store all previous prompt + response
  const [prevChats, setPrevChats] = useState([]);

  // Load previous chats from localStorage when page opens
  useEffect(() => {
    const savedChats = localStorage.getItem("geminiChats");

    if (savedChats) {
      setPrevChats(JSON.parse(savedChats));
    }
  }, []);

  const onSent = async (prompt) => {
    const finalPrompt = prompt || input;

    if (!finalPrompt.trim()) {
      return;
    }

    setLoading(true);
    setShowResult(true);
    setRecentPrompt(finalPrompt);
    setResultData("");

    const response = await askGemini(
      finalPrompt +
        "\n\nGive the answer in clean Markdown format with headings, bold points, bullet points, and code blocks where needed.",
    );

    setResultData(response);

    const newChat = {
      prompt: finalPrompt,
      response: response,
    };

    const updatedChats = [...prevChats, newChat];

    setPrevChats(updatedChats);
    localStorage.setItem("geminiChats", JSON.stringify(updatedChats));

    setLoading(false);
    setInput("");
  };

  const loadPreviousChat = (chat) => {
    setRecentPrompt(chat.prompt);
    setResultData(chat.response);
    setShowResult(true);
  };

  const clearChats = () => {
    setPrevChats([]);
    localStorage.removeItem("geminiChats");
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    resultData,
    loading,
    showResult,
    onSent,
    prevChats,
    loadPreviousChat,
    clearChats,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
