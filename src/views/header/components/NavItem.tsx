interface NavItemProps {
    name: string;
    icon: string;
    href: string;
}

export const NavItem = ({ name, icon, href }: NavItemProps) => {
    return (
        <>
            <li className="flex justify-center w-full first:mt-5 min-[1040px]:first:mt-0 min-[1040px]:block min-[1040px]:w-auto">
                <a href={href} className={`flex items-center justify-center w-full gap-1 px-5 py-4 text-xl duration-300 min-[1040px]:w-auto min-[1040px]:py-2 min-[1040px]:text-base  hover:text-COLOR_TEXT_PRIMARY_HOVER min-[1040px]:hover:scale-110`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                    </svg>
                    {name}
                </a>
            </li>
        </>
    );
};

