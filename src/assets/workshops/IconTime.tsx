interface Props {
    size: number,
    style? : string,
    color: string
}

const IconTime = ({ size, style, color }: Props) => {
    return (
        <div>
            <svg className={style} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="M12.25 2c-5.514 0-10 4.486-10 10s4.486 10 10 10s10-4.486 10-10s-4.486-10-10-10M18 13h-6.75V6h2v5H18z"/></svg>
        </div>
    )
}

export default IconTime