import { IFormData } from "../FormCard";
import AddOn from "./AddOn";

interface IFormStep3Props {
  data: IFormData;
  updateData: (path: string, value: any) => void;
}

export default function FormStep3({ data, updateData }: IFormStep3Props) {
  return (
    <div className="flex flex-col justify-start items-start gap-4 w-full">
      <AddOn
        id="onlineService"
        title="Online service"
        description="Access to multiplayer games"
        price={1}
        value={data.onlineService}
        updateData={updateData}
        billing={data.billing}
      />
      <AddOn
        id="largerStorage"
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price={2}
        value={data.largerStorage}
        updateData={updateData}
        billing={data.billing}
      />
      <AddOn
        id="customProfile"
        title="Customizable profile"
        description="Custom theme on your profile"
        price={2}
        value={data.customProfile}
        updateData={updateData}
        billing={data.billing}
      />
    </div>
  );
}
