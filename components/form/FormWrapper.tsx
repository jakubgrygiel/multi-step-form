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
  stepId: number;
}

export default function FormWrapper({ stepId }: IFormWrapper) {
  return (
    <div className="flex flex-col justify-start items-start gap-10 w-full">
      <div className="flex flex-col justify-start items-start gap-3 w-full text-[] ">
        <h1 className=" text-4xl font-bold text-[#022959]">
          {text[stepId].title}
        </h1>
        <p className=" text-[#9699AA]">{text[stepId].description}</p>
      </div>
      <div className="flex justify-start items-start w-full"></div>
    </div>
  );
}
