import type { ReactNode } from "react";

interface Props {
    title: string,
    cardTitle: string,
    secondTitle?: string
    dateEvent? : string
    children: ReactNode
}

const CardHome = ({ title, cardTitle, secondTitle, dateEvent, children }: Props) => {
  return (
    <div className="min-w-72 max-w-sm w-full">
      <h2 className="font-bold text-2xl text-center tracking-widest text-[#7AAEF1]">{title}</h2>
      <div className="mt-4 bg-gray-950 p-4 rounded-sm border border-indigo-200/20 transition-transform hover:scale-105">
        <div className="pb-4 flex flex-col text-center border border-indigo-200/20 border-x-0 border-t-0">
          <strong className="text-balance text-lg text-white/90">{cardTitle}</strong>
          <span className="">{secondTitle}</span>
          <p className="text-pink-400">{dateEvent}</p>
        </div>
        <div className="w-full mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardHome;
