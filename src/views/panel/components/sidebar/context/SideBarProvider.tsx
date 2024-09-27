import type { ReactNode } from "react"
import { createContext, useContext } from 'react'

interface RiemContextType {
    riemContextValue: boolean | undefined
}

const RiemContext = createContext<RiemContextType | undefined>(undefined)

interface SideBarProps {
    children: ReactNode
    contextValue: boolean
}

export const SideBarProvider = ({ children, contextValue }: SideBarProps) => {
    return (
        <RiemContext.Provider value={{riemContextValue: contextValue}}>
            {children}
        </RiemContext.Provider>
    )
}

export const useRiemContext = () => {
    const context = useContext(RiemContext)
    if (context === undefined) {
        throw new Error('useRiemContext must be used within a SideBarProvider')
    }
    return context.riemContextValue
}