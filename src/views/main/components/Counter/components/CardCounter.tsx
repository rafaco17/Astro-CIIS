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
            <div className="text-4xl px-4 rounded-t-lg font-bold tracking-wider">
                {time}
            </div>
            <span className="block text-xs text-slate-300 w-full text-center rounded-b-lg pb-1">
                {description}
            </span>
        </div>
    )
}

export default CardCounter