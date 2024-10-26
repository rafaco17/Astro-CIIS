import { useState } from "react";
import { Plan } from "./components/Plan";
import { plans } from "../inscription/services/plan";

export const PlanContainer = () => {
  const validDateDiscount = "2024-11-10T05:00:00Z";
  const isDiscount = new Date(validDateDiscount) > new Date();

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <ul className="flex flex-col justify-center items-center gap-1 text-gray-400 px-8 py-1 sm:flex-row sm:gap-8">
        {plans.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelectedPlan(item)}
            className={`rounded-md py-2 px-4 cursor-pointer relative transition-colors ${
              selectedPlan.plan === item.plan
                ? "bg-blue-800 text-white font-bold"
                : "bg-[#3e5ba380] hover:text-white"
            }`}
          >
            {item.title}
          </li>
        ))}
      </ul>

      <Plan
        title={selectedPlan.title}
        description={selectedPlan.description}
        cost={selectedPlan.cost}
        costOriginal={selectedPlan.costOriginal}
        benefits={selectedPlan.benefits}
        plan={selectedPlan.plan}
        isDiscount={isDiscount}
        src={selectedPlan.src}
      />
    </div>
  );
};
