import { IFormData } from "../FormCard";
import TextInput from "./TextInput";

interface IFormStep4Props {
  data: IFormData;
  updateData: (path: string, value: any) => void;
}

export default function FormStep4({}: IFormStep4Props) {
  return (
    <div className="flex flex-col justify-start items-start gap-6 w-full"></div>
  );
}
