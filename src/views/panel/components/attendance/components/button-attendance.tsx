import { useAttendance } from "../context/AttendanceContext";

interface Props {
    description: string
    index: number
    onClick?: () => void
}

const ButtonAttendance = ({ description, index, onClick } : Props) => {
    const attendanceIndex = useAttendance();
    const styleFocus = 'bg-blue-600 font-bold rounded-b-xl'

    return (
        <button onClick={onClick} className={`min-w-0 px-2 py-3 text-base text-[#041125] bg-blue-400 hover:bg-blue-500 rounded-t-xl border-white tracking-wider  lg:min-w-32 lg:px-8 lg:py-1 lg:text-lg transition-all ${attendanceIndex == index ? styleFocus : ''}`}>
            {description}
        </button>
    )
}

export default ButtonAttendance