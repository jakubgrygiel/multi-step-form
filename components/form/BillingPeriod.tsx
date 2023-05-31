interface IBillingPeriodProps {
  value: "monthly" | "yearly";
  updateData: (path: string, value: any) => void;
}

export default function BillingPeriod({
  value,
  updateData,
}: IBillingPeriodProps) {
  function handleClick() {
    let val = value === "monthly" ? "yearly" : "monthly";
    updateData("billing", val);
  }

  return (
    <div className="flex justify-center items-center gap-6 h-12 w-full bg-[#F8F9FF] rounded-lg">
      <span className={`font-bold ${value === "yearly" && "text-[#9699AA]"}`}>
        Monthly
      </span>
      <label
        htmlFor="period"
        className="flex justify-center items-center h-5 w-10 relative cursor-pointer"
      >
        <input
          id="period"
          type="checkbox"
          checked={value === "yearly" ? true : false}
          readOnly
          onClick={handleClick}
          className="h-5 w-10"
        />
        <div className="flex items-center h-5 w-10 bg-[#022959] rounded-xl absolute">
          <span
            className={` h-3 w-3 bg-white rounded-md absolute inset-x-1 transition-transform ${
              value === "yearly" && "translate-x-5"
            }`}
          ></span>
        </div>
      </label>
      <span className={`font-bold ${value === "monthly" && "text-[#9699AA]"}`}>
        Yearly
      </span>
    </div>
  );
}
