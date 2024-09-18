import { useEffect, useState } from "react";
import CardCounter from "./components/CardCounter"
import type { RemainTime } from "./models/RemainTime";
import getRemainTime from "./utilities/get-remain-time";

interface PropsCounter {
    eventDate: string
}

const Counter = ({eventDate}: PropsCounter) => {
    const [time, setTime] = useState<RemainTime>({
        remainTime: 0,
        remainSeconds: '00',
        remainMinutes: '00',
        remainHours: '00',
        remainDays: '00'
    })

    useEffect(() => {
        const updateRemainTime = () => {
            const t = getRemainTime(eventDate)
            setTime(t)
        }
        updateRemainTime()
        const timerUpdate = setInterval(updateRemainTime, 1000)
        return () => clearInterval(timerUpdate)
    }, [eventDate])

    return (
        <div className="flex gap-x-3 justify-center text-5xl mt-8 transition-transform hover:scale-110 animate-bounce">
            <CardCounter time={time.remainDays} description="dias"/>
            <CardCounter time={time.remainHours} description="horas"/>
            <CardCounter time={time.remainMinutes} description="minutos"/>
            <CardCounter time={time.remainSeconds} description="segundos"/>
        </div>
    )
}

export default Counter;
