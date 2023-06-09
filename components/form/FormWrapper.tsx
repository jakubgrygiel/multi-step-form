import { IFormData } from "../FormCard";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";

const text = [
  {
    title: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
];

interface IFormWrapper {
  data: IFormData;
  stepId: number;
  checkInputs: boolean;
  changeChoices: () => void;
  updateData: (path: string, value: any) => void;
}

export default function FormWrapper({
  stepId,
  data,
  checkInputs,
  changeChoices,
  updateData,
}: IFormWrapper) {
  return (
    <div className="flex flex-col justify-start items-start gap-10 w-full lg:px-6 lg:py-8 lg:bg-white lg:rounded-lg lg:shadow-2xl lg:gap-5">
      <div className="flex flex-col justify-start items-start gap-3 w-full">
        <h1 className=" text-4xl font-bold lg:text-2xl">
          {text[stepId].title}
        </h1>
        <p className=" text-[#9699AA]">{text[stepId].description}</p>
      </div>
      <div className="flex justify-start items-start w-full">
        {stepId === 0 && (
          <FormStep1
            updateData={updateData}
            data={data}
            checkInputs={checkInputs}
          />
        )}
        {stepId === 1 && <FormStep2 updateData={updateData} data={data} />}
        {stepId === 2 && <FormStep3 updateData={updateData} data={data} />}
        {stepId === 3 && (
          <FormStep4 data={data} changeChoices={changeChoices} />
        )}
      </div>
    </div>
  );
}
