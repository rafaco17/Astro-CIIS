import { URI } from "../../../helpers/endpoints";
import { useAuth } from "../../../hooks/use-auth";
import type { Props } from "../adapters/adapter";

export const Plan = ({
  plan,
  src,
  description,
  title,
  isDiscount,
  cost,
  costOriginal,
  benefits,
}: Props) => {
  const { user, updateUser } = useAuth();

  const handleClick = () => {
    if (!user) {
      location.href = `/registro/user/${encodeURIComponent(plan)}`;
    } else {
      fetch(URI.user.inscription, {
        method: "PATCH",
        body: JSON.stringify({ plan_ciis: plan }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
        .then(async (res) => {
          if (res.ok) return res.json();
          else {
            let error = await res.json();
            throw error;
          }
        })
        .then(() => {
          user.plan_ciis = plan;
          user.dataCiis = 3;
          updateUser(user);
          location.href = `/dashboard/ciis`;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <div
      className={`w-[90%] h-[450px] rounded-3xl  overflow-hidden sm:w-[350px]`}
    >
      <div className="w-full h-full  overflow-hidden flex flex-col justify-center items-center pb-6 bg-[#0e0e20]">
        <div className="w-full h-1/2 relative">
          <img
            src={src}
            className="object-cover h-full w-full opacity-35 blur-sm"
            alt="Background"
            loading="lazy"
            decoding="async"
            width={1600}
            height={900}
            draggable="false"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center z-50 text-center">
            <div className={`text-3xl font-bold p-1 mb-3 `}>{title}</div>

            <div className="font-normal text-[1rem] mb-5 text-[#b3b3b3] px-4">
              {description}
            </div>
            {isDiscount ? (
              <div className="flex justify-center items-baseline mt-2">
                <p className="text-5xl font-bold mr-2">S/.{cost}</p>
                <p className="text-xl font-bold text-[#a0a0a0] line-through">
                  S/.{costOriginal}
                </p>
              </div>
            ) : (
              <div className="flex justify-center items-baseline mt-2">
                <p className="text-5xl font-bold mr-2">S/.{cost}</p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-1/2 p-4 flex flex-col items-center justify-between">
          <ul className="planBenefits">
            <li className="flex items-center before:content-['✔'] before:text-[#3e5ba3] before:pr-2 py-2">
              Se otorgará el certificado de 120 horas
            </li>
            <li className="flex items-center before:content-['✔'] before:text-[#3e5ba3] before:pr-2 py-2">
              Kit de herramientas útiles en tu asistencia al evento
            </li>
          </ul>
          <button
            className={`w-1/2 bg-[#3e5ba380] py-2 text-white rounded-md font-bold
            hover:bg-blue-800 transition-transform`}
            onClick={handleClick}
          >
            !Lo quiero!
          </button>
        </div>
      </div>
    </div>
  );
};
