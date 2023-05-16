import { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [color, setColor] = useState(false);
  const [searchTitle,setSearchTitle] = useState("");
  const [color2 , setColor2] = useState(false);
  const handleChange = ()=>{
  setColor2(!color2)
  
  } 
  const handleColor = () => {
    setColor(!color);
  };

  return (
    <MyContext.Provider value={{ color, handleColor,searchTitle,setSearchTitle,color2,handleChange }}>
      {children}
    </MyContext.Provider>
  );
};
