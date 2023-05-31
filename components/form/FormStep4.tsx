import { IFormData } from "../FormCard";
import TextInput from "./TextInput";

interface IFormStep4Props {
  data: IFormData;
}

export default function FormStep4({ data }: IFormStep4Props) {
  return (
    <div className="flex flex-col justify-start items-start gap-6 w-full">
      <div>
        <div>
          <div>
            <span>
              <h2>Arcade (monthly)</h2>
              <span>Change</span>
            </span>
            <span>$9/mo</span>
          </div>
          <div>
            <span>
              <span>Online service</span>
              <span>+$1/mo</span>
            </span>
          </div>
        </div>
        <div>
          <span>Total (per month)</span>
          <span>+$12/mo</span>
        </div>
      </div>
    </div>
  );
}
