import Image from "next/image";

interface IRadioInputProps {
  id: string;
  title: string;
  price: number;
  image: string;
  value: string;
  monthly: boolean;
  updateData: (path: string, value: any) => void;
}

export default function RadioInput({
  id,
  title,
  price,
  monthly,
  image,
  value,
  updateData,
}: IRadioInputProps) {
  const priceVal = monthly ? price : price * 10;

  function handleClick() {
    updateData("plan", id);
  }

  return (
    <label htmlFor={id} className="relative cursor-pointer">
      <input
        id={id}
        type="radio"
        name="plan"
        checked={id === value}
        readOnly
        onClick={handleClick}
        className="absolute opacity-0"
      />
      <div
        className={`flex flex-col justify-between items-start h-40 px-4 py-5 border border-[#D6D9E6] rounded-lg ${
          id === value && "bg-[#F8F9FF] border-[#483EFF]"
        } transition-colors hover:border-[#483EFF] lg:flex-row lg:justify-start lg:items-center lg:gap-4 lg:h-20`}
      >
        <Image src={image} width={40} height={40} alt={`icon of ${id} plan`} />
        <div className="flex flex-col justify-start items-start">
          <span className=" font-medium">{title}</span>
          <span className="text-sm text-[#9699AA]">${priceVal}/mo</span>
        </div>
      </div>
    </label>
  );
}
