import React from 'react';

interface Props {
    icono: React.ReactNode,  // Declarar el icono como un componente de React
    title_main: string,
    title_aside: string
}

const TransparentsCards = ({ icono, title_aside, title_main }: Props) => {
    return (
        <div className='flex justify-start xl:justify-center items-center gap-x-4 w-[280px]'>
            {icono}
            <div className='font-semibold tracking-wider text-sm text-slate-300'>
                <p className='uppercase'>{title_main}</p>
                <p className='uppercase'>{title_aside}</p>
            </div>
        </div>
    )
}

export default TransparentsCards;
