"use client";

import { ReactNode, createContext } from "react"

interface contextProps {

}

interface contextProviderProps {
    children:ReactNode;
}

const Context = createContext({} as contextProps)

export const ContextProvider = ({ children }: contextProviderProps) => {
    return (
        <Context.Provider  value={{  }}>
            { children }
        </Context.Provider>
    )
}