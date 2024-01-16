import React, { createContext, useContext, useRef, useState } from "react";

interface GlobalContextProps {
    activeSection: string;
    setActiveSection: React.Dispatch<React.SetStateAction<string>>;
    introRef: React.MutableRefObject<HTMLElement | null>;
    aboutRef: React.MutableRefObject<HTMLElement | null>;
    projectsRef: React.MutableRefObject<HTMLElement | null>;
}

interface ContextProviderProps {
    children: React.ReactNode;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const ContextProvider: React.FC<ContextProviderProps> = ({children}) => {
    const [activeSection, setActiveSection] = useState<string>("Home");
    const introRef = useRef<HTMLElement | null>(null);
    const aboutRef = useRef<HTMLElement | null>(null);
    const projectsRef = useRef<HTMLElement | null>(null);

    return (
        <GlobalContext.Provider value={{activeSection, setActiveSection, introRef, aboutRef, projectsRef}}>
            {children}
        </GlobalContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);  
    if(!context){
        throw new Error("useGlobalContext must be used within an ContextProvider");
    }
    return context;
}