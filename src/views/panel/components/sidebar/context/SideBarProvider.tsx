import type { ReactNode } from "react"
import { createContext, useContext } from 'react'
import { useLocation } from "react-router-dom"

interface RiemContextType {
    expanded: boolean | undefined
}

const RiemContext = createContext<RiemContextType | undefined>(undefined)

interface SideBarProps {
    children: ReactNode
    expanded: boolean
}

export const SideBarProvider = ({ children, expanded }: SideBarProps) => {
    return (
        <RiemContext.Provider value={{expanded:expanded}}>
            {children}
        </RiemContext.Provider>
    )
}

export const useExpanded = () => {
    const context = useContext(RiemContext)
    if (context === undefined) {
        throw new Error('useRiemContext must be used within a SideBarProvider')
    }
    return context.expanded
}

export const useItemState = (to: string) => {
    const context = useContext(RiemContext)
    if (context === undefined) {
        throw new Error('useRiemContext must be used within a SideBarProvider')
    }

    let location = useLocation();
    return (location.pathname.split("/dashboard").pop() === to);
    //return context.itemStates[index]
}