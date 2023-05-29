import Step from "./Step";

export default function Steps() {
  return (
    <div className="flex flex-col justify-start items-start gap-8">
      <Step id={1} title="YOUR INFO" isActive={true} />
      <Step id={2} title="SELECT PLAN" isActive={false} />
      <Step id={3} title="ADD-ONS" isActive={false} />
      <Step id={4} title="SUMMARY" isActive={false} />
    </div>
  );
}
