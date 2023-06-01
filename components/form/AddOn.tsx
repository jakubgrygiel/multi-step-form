interface IAddOnProps {
  id: string;
  title: string;
  description: string;
  price: number;
  value: boolean;
  billing: "monthly" | "yearly";
  updateData: (path: string, value: any) => void;
}

export default function AddOn({
  id,
  title,
  description,
  price,
  value,
  billing,
  updateData,
}: IAddOnProps) {
  const priceVal = billing === "monthly" ? price : price * 10;

  function handleClick() {
    updateData(id, !value);
  }

  return (
    <label htmlFor={id} className="relative w-full cursor-pointer">
      <input
        id={id}
        type="checkbox"
        checked={value}
        readOnly
        onClick={handleClick}
        className="absolute w-full h-full appearance-none"
      />
      <div
        className={`flex justify-between items-center w-full px-6 py-4 rounded-lg border ${
          value ? "border-[#483EFF] bg-[#F8F9FF]" : "border-[#D6D9E6]"
        } transition-colors hover:border-[#483EFF] lg:px-4 lg:py-3`}
      >
        <div className="flex justify-between items-center gap-6 lg:gap-4">
          <div
            className={`flex justify-center items-center h-5 w-5 border border-[#D6D9E6] rounded ${
              value && "bg-[#483EFF]"
            } transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
              viewBox="0 0 12 9"
            >
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="2"
                d="m1 4 3.433 3.433L10.866 1"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center items-start">
            <span className=" font-medium lg:text-sm">{title}</span>
            <span className=" text-sm text-[#9699AA] lg:text-xs">
              {description}
            </span>
          </div>
        </div>
        <div className="text-sm text-[#483EFF] lg:text-xs">
          +${priceVal}/{billing === "monthly" ? "mo" : "yr"}
        </div>
      </div>
    </label>
  );
}
