import { Plan } from "./components/Plan";
import { plans } from "../inscription/services/plan";

export const PlanContainer = () => {
    return (
        <div
            className="flex flex-row justify-center items-center flex-wrap py-5 gap-16"
        >
            {
                plans.map((item) => (
                    <Plan 
                        plan={item.plan}
                        name={item.title}
                        description={item.description}
                        price={item.cost}
                        src={item.src}
                    />
                ))
            }
        </div>
    );
};