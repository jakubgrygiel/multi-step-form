import RadioInput from "./RadioInput";

interface IRadioGroupProps {
  value: "arcade" | "advanced" | "pro";
  billing: "monthly" | "yearly";
  updateData: (path: string, value: any) => void;
}

export default function RadioGroup({
  value,
  updateData,
  billing,
}: IRadioGroupProps) {
  return (
    <div
      className="grid grid-cols-3 gap-4 w-full"
      role="radiogroup"
      aria-label="Select your plan"
    >
      <RadioInput
        id="arcade"
        title="Arcade"
        price={9}
        image="/assets/icon-arcade.svg"
        monthly={billing === "monthly"}
        value={value}
        updateData={updateData}
      />
      <RadioInput
        id="advanced"
        title="Advanced"
        price={12}
        image="/assets/icon-advanced.svg"
        monthly={billing === "monthly"}
        value={value}
        updateData={updateData}
      />
      <RadioInput
        id="pro"
        title="Pro"
        price={15}
        image="/assets/icon-pro.svg"
        monthly={billing === "monthly"}
        value={value}
        updateData={updateData}
      />
    </div>
  );
}
