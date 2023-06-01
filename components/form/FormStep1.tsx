import { IFormData } from "../FormCard";
import TextInput from "./TextInput";

interface IFormStep1Props {
  data: IFormData;
  checkInputs: boolean;
  updateData: (path: string, value: any) => void;
}

export default function FormStep1({
  checkInputs,
  updateData,
  data,
}: IFormStep1Props) {
  return (
    <div className="flex flex-col justify-start items-start gap-6 w-full">
      <TextInput
        id="name"
        label="Name"
        placeholder="e.g. Stephen King"
        type="text"
        value={data.name}
        updateData={updateData}
        checkInputs={checkInputs}
      />
      <TextInput
        id="email"
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        type="mail"
        value={data.email}
        updateData={updateData}
        checkInputs={checkInputs}
      />
      <TextInput
        id="phone"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        type="phone"
        value={data.phone}
        updateData={updateData}
        checkInputs={checkInputs}
      />
    </div>
  );
}
