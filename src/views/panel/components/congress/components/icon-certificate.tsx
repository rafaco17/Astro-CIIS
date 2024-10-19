interface Props {
    size: number,
    style? : string,
    color: string
}

const IconCertificate = ({ size, style, color }: Props) => {
    return (
        <div>
            <svg className={style} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><path fill={color} d="M4 3c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h8v5l3-3l3 3v-5h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm8 2l3 2l3-2v3.5l3 1.5l-3 1.5V15l-3-2l-3 2v-3.5L9 10l3-1.5zM4 5h5v2H4zm0 4h3v2H4zm0 4h5v2H4z"/></svg>
        </div>
    )
}

export default IconCertificate