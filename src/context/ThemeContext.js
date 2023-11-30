"use client";

import { createContext, useState } from "react";

export const ModeContext = createContext(); 

export  function ThemeProvider({children}) {
    const [mode , setMode] = useState('dark');
    const toggleMode =()=>{
        setMode(mode === 'dark'? 'light':'dark')
    }

  return (
    <ModeContext.Provider value={{toggleMode , mode}}>
        <div className={`theme ${mode}`}>
            {children}
        </div>
    </ModeContext.Provider>
  )
}
