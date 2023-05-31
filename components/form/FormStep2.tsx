import { IFormData } from "../FormCard";
import BillingPeriod from "./BillingPeriod";
import RadioGroup from "./RadioGroup";
import TextInput from "./TextInput";

interface IFormStep2Props {
  data: IFormData;
  updateData: (path: string, value: any) => void;
}

export default function FormStep2({ data, updateData }: IFormStep2Props) {
  return (
    <div className="flex flex-col justify-start items-start gap-6 w-full">
      <RadioGroup
        value={data.plan}
        billing={data.billing}
        updateData={updateData}
      />
      <BillingPeriod value={data.billing} updateData={updateData} />
    </div>
  );
}
