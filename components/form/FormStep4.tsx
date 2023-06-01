import { IFormData } from "../FormCard";

interface IFormStep4Props {
  data: IFormData;
  changeChoices: () => void;
}

export default function FormStep4({ data, changeChoices }: IFormStep4Props) {
  let price = 0;
  let addOnPrice = 0;
  let total = 0;
  const hasAddOns =
    data.onlineService || data.largerStorage || data.customProfile;

  if (data.plan === "arcade") {
    price = 9;
  }
  if (data.plan === "advanced") {
    price = 12;
  }
  if (data.plan === "pro") {
    price = 15;
  }
  if (data.onlineService) {
    addOnPrice = addOnPrice + 1;
  }
  if (data.largerStorage) {
    addOnPrice = addOnPrice + 2;
  }
  if (data.customProfile) {
    addOnPrice = addOnPrice + 2;
  }

  total = price + addOnPrice;

  function handleClick() {
    changeChoices();
  }

  return (
    <div className="flex flex-col justify-start items-start gap-6 w-full">
      <div className="w-full">
        <div
          className={`w-full p-6 pt-4 bg-[#F8F9FF] rounded-lg ${
            hasAddOns ? " pt-4" : "py-4"
          }`}
        >
          <div
            className={`flex justify-between items-center w-full border-[#E4E5EE] ${
              hasAddOns && "border-b pb-6"
            }`}
          >
            <span>
              <h2 className="font-medium capitalize">
                {data.plan} ({data.billing === "monthly" ? "Monthly" : "Yearly"}
                )
              </h2>
              <button
                onClick={handleClick}
                className="text-sm text-[#9699AA] underline transition-colors hover:text-[#483EFF]"
              >
                Change
              </button>
            </span>
            <span className="font-bold">
              ${data.billing === "monthly" ? price : price * 10}/
              {data.billing === "monthly" ? "mo" : "yr"}
            </span>
          </div>
          {hasAddOns && (
            <div className="flex flex-col justify-between items-center gap-4 w-full pt-4">
              {data.onlineService && (
                <span className="flex justify-between items-center w-full">
                  <span className="text-sm text-[#9699AA]">Online service</span>
                  <span className="text-sm">
                    +${data.billing === "monthly" ? 1 : 10}/
                    {data.billing === "monthly" ? "mo" : "yr"}
                  </span>
                </span>
              )}
              {data.largerStorage && (
                <span className="flex justify-between items-center w-full">
                  <span className="text-sm text-[#9699AA]">Larger storage</span>
                  <span className="text-sm">
                    +${data.billing === "monthly" ? 2 : 20}/
                    {data.billing === "monthly" ? "mo" : "yr"}
                  </span>
                </span>
              )}
              {data.customProfile && (
                <span className="flex justify-between items-center w-full">
                  <span className="text-sm text-[#9699AA]">
                    Customizable profile
                  </span>
                  <span className="text-sm">
                    +${data.billing === "monthly" ? 2 : 20}/
                    {data.billing === "monthly" ? "mo" : "yr"}
                  </span>
                </span>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center w-full p-6">
          <span className="text-sm text-[#9699AA]">
            Total (per {data.billing === "monthly" ? "month" : "year"})
          </span>
          <span className=" text-xl font-bold text-[#483EFF]">
            +${data.billing === "monthly" ? total : total * 10}/
            {data.billing === "monthly" ? "mo" : "yr"}
          </span>
        </div>
      </div>
    </div>
  );
}
