import type { ReactNode } from "react"
import { createContext, useContext } from 'react'

interface RiemContextType {
    expanded: boolean | undefined
    itemStates: boolean[]
}

const RiemContext = createContext<RiemContextType | undefined>(undefined)

interface SideBarProps {
    children: ReactNode
    expanded: boolean
    itemsStates: boolean[]
}

export const SideBarProvider = ({ children, expanded, itemsStates }: SideBarProps) => {
    return (
        <RiemContext.Provider value={{expanded:expanded, itemStates:itemsStates}}>
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

export const useItemState = (index:number) => {
    const context = useContext(RiemContext)
    if (context === undefined) {
        throw new Error('useRiemContext must be used within a SideBarProvider')
    }
    return context.itemStates[index]
}