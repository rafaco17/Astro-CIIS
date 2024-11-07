import { createContext, useContext, type ReactNode} from 'react'

interface AttendanceContextType {
    index: number | undefined
}

const AttendanceContext = createContext<AttendanceContextType | undefined>(undefined)

interface AttendanceProps {
    children: ReactNode
    index: number
}

export const AttendanceProvider = ({ children, index }: AttendanceProps) => {
    return (
        <AttendanceContext.Provider value={{index: index}}>
            {children}
        </AttendanceContext.Provider>
    )
}

export const useAttendance = () => {
    const context = useContext(AttendanceContext)
    if (context === undefined) {
        throw new Error('useRiemContext must be used within a SideBarProvider')
    }
    return context.index
}