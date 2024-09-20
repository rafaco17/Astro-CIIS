interface PropsTopics {
  name: string,
  description: string,
  image1: string,
  image2: string
}

export const Card = ({ name, description, image1, image2 }: PropsTopics) => {

  const topicName = name.length;
  const translateProperty = topicName < 26 ? "group-hover:translate-y-10" : "group-hover:translate-y-1/2"
  return (
    <div className={`h-80 relative flex items-center justify-center py-5 transition-all duration-500 border rounded-2xl group px-7 bg-[rgba(0,153,255,0.3)] border-[rgb(0,153,255)]  cursor-crosshair`}>
      <p className={`absolute w-full text-2xl font-bold text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[20ch] transition-all duration-500 z-[60] ${translateProperty} group-hover:text-lg`}>
        {name}
      </p>
      <p className="translate-y-28 absolute text-center px-6 font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        {description}
      </p>
      <div className="relative h-auto opacity-20 w-max rotate-6 z-50 blur-sm transition-all duration-700 group-hover:blur-none group-hover:-translate-y-[4.8rem] group-hover:opacity-100">
        <img src={image1} className="rounded-sm w-auto h-48 drop-shadow-gift border-2 border-white" alt="" />
        <img src={image2} className="rounded-sm h-24 w-auto drop-shadow-gift absolute -bottom-0.5 -right-2 border-2 border-white" alt="" />
      </div>
    </div>
  );
};
