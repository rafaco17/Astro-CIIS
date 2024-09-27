interface Props {
    plan: string;
}

export const PlanSelect = ({plan}:Props) => {
    return (
        <button className="w-1/2 bg-[#3e5ba380] py-2 text-white rounded-md font-bold">
            !Lo quiero!
        </button>
    );
};