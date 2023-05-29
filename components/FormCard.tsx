import Image from "next/image";
import Steps from "./Steps";

export default function FormCard() {
  return (
    <div className="flex justify-center items-center gap-24 p-4 rounded-2xl bg-white shadow-2xl">
      <div className="relative">
        <Image
          src="/assets/bg-sidebar-desktop.svg"
          width={274}
          height={568}
          alt="form background"
        />
        <div className="absolute inset-0 py-8 px-10 text-white">
          <Steps />
        </div>
      </div>
      <div></div>
    </div>
  );
}
