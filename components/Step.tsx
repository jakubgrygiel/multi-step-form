interface IStepProps {
  id: number;
  title: string;
  isActive: boolean;
}

export default function Step({ id, title, isActive }: IStepProps) {
  return (
    <div className="flex justify-start items-center gap-4">
      <div>
        <span
          className={`flex justify-center items-center w-8 h-8 border  rounded-2xl text-sm font-bold ${
            isActive
              ? "bg-[#BEE2FD] text-[#022959] border-[#BEE2FD]"
              : "border-white text-white"
          } text-center transition-colors`}
        >
          {id}
        </span>
      </div>
      <div className="flex justify-center items-start flex-col lg:hidden">
        <span className="text-xs text-[#ABBCFF]">STEP {id}</span>
        <span className="text-sm font-bold tracking-widest">{title}</span>
      </div>
    </div>
  );
}
