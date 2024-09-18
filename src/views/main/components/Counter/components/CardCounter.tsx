import { Color } from "../../../../../models/colors"
import { useColorWithOpacity } from "../../../../../utilities/use-color-with-opacity"

const rgbaColor = useColorWithOpacity(Color.COLOR_BG_FILL_SECONDARY_DEFAULT, 0.6)
const rgbaColorBase = useColorWithOpacity(Color.COLOR_BG_FILL_SECONDARY_DISABLED, 0.9)

interface PropsCardCounter {
    time: string,
    description: string
}

const CardCounter = ({time, description}: PropsCardCounter) => {
    return (
        <div className="flex flex-col">
            <div style={{ backgroundColor: rgbaColor }} className="text-5xl px-6 py-4 rounded-t-lg font-bold tracking-wider">
                {time}
            </div>
            <span style={{ backgroundColor: rgbaColorBase }} className="block text-base w-full text-center rounded-b-lg pb-1">
                {description}
            </span>
        </div>
    )
}

export default CardCounter