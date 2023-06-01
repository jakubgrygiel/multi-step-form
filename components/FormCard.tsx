"use client";

import Image from "next/image";
import Steps from "./Steps";
import FormWrapper from "./form/FormWrapper";
import { useEffect, useState } from "react";
import LastCard from "./LastCard";

export interface IFormData {
  name: string;
  email: string;
  phone: string;
  plan: "arcade" | "advanced" | "pro";
  billing: "monthly" | "yearly";
  onlineService: boolean;
  largerStorage: boolean;
  customProfile: boolean;
}

export default function FormCard() {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    billing: "monthly",
    onlineService: false,
    largerStorage: false,
    customProfile: false,
  });

  const [currentCard, setCurrentCard] = useState<number>(0);

  function updateData(path: string, value: any) {
    let newData: IFormData = { ...formData };
    newData[path as keyof IFormData] = value;
    setFormData(newData);
  }

  function handleClickBack() {
    if (currentCard > 0) {
      setCurrentCard((prev) => prev - 1);
    }
  }

  function handleClickNext() {
    if (currentCard < 3) {
      setCurrentCard((prev) => prev + 1);
    }
  }

  function handleClickConfirm() {
    console.log(formData);
    setCurrentCard(4);
  }

  function changeChoices() {
    setCurrentCard(1);
  }

  return (
    <div className="flex justify-center items-center p-4 rounded-2xl bg-white shadow-2xl">
      <div
        className={`grid ${
          currentCard < 4 ? "grid-1fr" : "grid-0fr opacity-0"
        } transition-hide`}
      >
        <div className="relative overflow-hidden">
          <Image
            src="/assets/bg-sidebar-desktop.svg"
            width={274}
            height={568}
            alt="form background"
            priority
          />
          <div className="absolute inset-0 py-8 px-10 text-white">
            <Steps stepId={currentCard} />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col justify-between items-center h-568 px-24 ${
          currentCard < 4 && "py-4 pt-10"
        }`}
      >
        <div className="w-450">
          {currentCard < 4 ? (
            <FormWrapper
              stepId={currentCard}
              updateData={updateData}
              data={formData}
              changeChoices={changeChoices}
            />
          ) : (
            <LastCard />
          )}
        </div>
        <div
          className={`flex ${
            currentCard === 0 ? "justify-end" : "justify-between"
          } items-center w-full`}
        >
          <button
            onClick={handleClickBack}
            className={`${
              currentCard === 0 || currentCard > 3 ? "hidden" : "block"
            } h-12 bg-transparent text-[#9699AA] font-medium transition-colors hover:text-[#022959]`}
          >
            Go Back
          </button>
          <button
            onClick={handleClickNext}
            disabled={
              formData.name === "" ||
              formData.email === "" ||
              formData.phone === ""
            }
            className={`${
              currentCard > 2 ? "hidden" : "block"
            } h-12 px-6 bg-[#022959] text-white font-medium rounded-lg anim transition-opacity disabled:opacity-30`}
          >
            Next step
          </button>
          <button
            onClick={handleClickConfirm}
            className={`${
              currentCard === 3 ? "block" : "hidden"
            } h-12 px-6 bg-[#483EFF] text-white font-medium rounded-lg`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
