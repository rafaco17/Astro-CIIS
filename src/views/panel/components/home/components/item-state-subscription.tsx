interface Props {
    description: string,
    state: boolean
}

const ItemStateSubscription = ({ description, state }: Props) => {
    const noSuscriber = 'bg-red-400'
    const Suscriber = 'bg-green-400 text-[#2E2E2E]'
    
    return (
        <li className="flex justify-between items-center">
            <span className="w-1/2 text-white/85">{description}</span>
            <div className={`uppercase font-semibold px-3 py-2 text-right rounded-full  ${state ? Suscriber : noSuscriber}`}>
                {state ? 'Inscrito': 'No inscrito'}
            </div>
        </li>
    )
}

export default ItemStateSubscription