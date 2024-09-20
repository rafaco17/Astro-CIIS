interface PropsTopics {
    name: string,
    image1: string,
    image2: string
}

export const Card = ({name,image1,image2}: PropsTopics) => {
    const topicName = name.length;
    const translateProperty = topicName < 26 ? "group-hover:translate-y-10" : "group-hover:translate-y-1/2"
    return (
      <div className="relative flex items-center justify-center py-5 transition-all duration-500 border rounded-2xl group px-7 bg_primary border_primary cursor-crosshair">
        <p className={`absolute w-full text-lg font-bold text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[20ch] transition-all duration-500 z-[60] ${translateProperty}`}>
          {name}
        </p>
        <div className="relative h-auto opacity-20 w-max rotate-6 z-50 blur-sm transition-all duration-500 group-hover:blur-none group-hover:-translate-y-1/3 group-hover:opacity-100">
          <img src={image1} className="w-auto h-32 drop-shadow-gift border-2 border-white" alt="" />
          <img src={image2} className="h-16 w-auto drop-shadow-gift absolute -bottom-0.5 -right-2 border-2 border-white" alt="" />
        </div>
      </div>
    );
};
  