import Step from "./Step";

interface IStepsProps {
  stepId: number;
}

export default function Steps({ stepId }: IStepsProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-8">
      <Step id={1} title="YOUR INFO" isActive={stepId === 0} />
      <Step id={2} title="SELECT PLAN" isActive={stepId === 1} />
      <Step id={3} title="ADD-ONS" isActive={stepId === 2} />
      <Step id={4} title="SUMMARY" isActive={stepId > 2} />
    </div>
  );
}
