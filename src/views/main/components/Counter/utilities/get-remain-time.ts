import type { RemainTime } from "../models/RemainTime";

const getRemainTime = (eventDate: string): RemainTime => {
    const now = new Date()
    const eventTime = new Date(eventDate)

    if (eventTime < now) {
        return {
            remainTime: 0,
            remainSeconds: '00',
            remainMinutes: '00',
            remainHours: '00',
            remainDays: '00'
        }
    }

    const remainTime = eventTime.getTime() - now.getTime();
    const remainSeconds = Math.floor((remainTime / 1000) % 60).toString().padStart(2, '0')
    const remainMinutes = Math.floor((remainTime / 1000 / 60) % 60).toString().padStart(2, '0')
    const remainHours = Math.floor((remainTime / 1000 / 60 / 60) % 24).toString().padStart(2, '0')
    const remainDays = Math.floor(remainTime / (1000 * 60 * 60 * 24)).toString().padStart(2, '0')

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
}

export default getRemainTime
