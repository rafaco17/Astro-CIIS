interface NavItemProps {
    name: string;
    icon: string;
    href: string;
  }
  
export const NavItem = ({ name, icon, href }: NavItemProps) => {
    return(
        <>
            <li className="flex justify-center w-full first:mt-5 md:first:mt-0 md:block md:w-auto">
            <a href={href} className="flex items-center justify-center w-full gap-1 px-5 py-4 text-xl duration-300 md:w-auto md:py-2 md:text-base  md:hover:scale-110 max-[1000px]:px-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
                {name}
            </a>
            </li>
        </>
    );
};