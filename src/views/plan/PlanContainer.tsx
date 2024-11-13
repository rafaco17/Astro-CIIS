import { useState } from "react";
import { Plan } from "./components/Plan";
import { plans } from "../inscription/services/plan";
import { AuthProvider } from "../panel/context/AuthContext";

const PlanContainer = () => {
  const validDateDiscount = "2024-11-11T17:00:00Z";
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

      {isDiscount && (
        <p className="text-center mb-8">
          Precios de descuento válidos hasta las 11:59 hrs del 11 de noviembre de
          2024 (UTC-5)
        </p>
      )}
    </div>
  );
};

export default () => (
  <AuthProvider>
    <PlanContainer />
  </AuthProvider>
);
