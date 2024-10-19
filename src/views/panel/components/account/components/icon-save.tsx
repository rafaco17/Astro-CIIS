interface Props {
    size: number,
    style? : string,
    color: string
}

const IconSave = ({ size, style, color }: Props) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className={style} width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="M21 7v12q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h12zm-9 11q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-6-8h9V6H6z"/></svg>
        </div>
    )
}

export default IconSave