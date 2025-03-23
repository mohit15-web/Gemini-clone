import runChat from "@/config/Gemini";
import { createContext, useState } from "react";

type StateType = {
  onSent: () => Promise<void>;
  recent: string;
  setRecent: React.Dispatch<React.SetStateAction<string>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  prevPrompts: string[];
  setPrevPrompts: React.Dispatch<React.SetStateAction<string[]>>;
  showResult: boolean;
  loading: boolean;
  resultData: string;
};

const State = {
  onSent: async () => {},
  recent: "",
  setRecent: () => {},
  input: "",
  setInput: () => {},
  prevPrompts: [],
  setPrevPrompts: () => {},
  showResult: false,
  loading: false,
  resultData: "",
};

export const Context = createContext<StateType>(State);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [input, setInput] = useState("");
  const [recent, setRecent] = useState("");
  const [prevPrompts, setPrevPrompts] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const typingEffect = (idx: number, next: string) => {
    setTimeout(() => {
      setResultData((prev) => prev + next);
    }, 15 * idx);
  };

  const onSent = async () => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecent(input);
    setPrevPrompts(prev => [...prev, input]);
    const response = await runChat(input);
    let resArray = response.split("**");
    let newRes: string = "";
    for (let i = 0; i < resArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newRes += resArray[i];
      } else {
        newRes += "<b>" + resArray[i] + "</b>";
      }
    }
    let newResponse = newRes.split("*").join("</br>");
    let newResArray = newResponse.split("");
    for (let i = 0; i < newResArray.length; i++) {
      typingEffect(i, newResArray[i]);
    }
    setLoading(false);
    setInput("");
  };

  const value = {
    onSent,
    recent,
    setRecent,
    input,
    setInput,
    prevPrompts,
    setPrevPrompts,
    showResult,
    loading,
    resultData,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
