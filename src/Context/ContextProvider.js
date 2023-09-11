import React, { createContext, useContext } from "react";
import AllBlogData from "../Hooks/AllBlogData";

export const MyContext = createContext();

export const useTheme = () => useContext(MyContext)

export default function ContextProvider({ children }) {
    const value = AllBlogData();
    const dark = localStorage.getItem("theme-color") === "dark" ? true : false
    
    return <MyContext.Provider value={{value, dark}}>
                {children}
            </MyContext.Provider>;
};