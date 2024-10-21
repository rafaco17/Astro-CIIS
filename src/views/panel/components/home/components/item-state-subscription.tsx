interface Props {
    description: string,
    label: string,
    color: string
}

const ItemStateSubscription = ({ description, label, color }: Props) => {
    return (
        <li className="flex justify-between items-center">
            <span className="w-1/2 text-white/85">{description}</span>
            <div className={`uppercase font-semibold px-3 py-2 text-right rounded-full ${color}`}>
                {label}
            </div>
        </li>
    )
}

export default ItemStateSubscription