import useInput from "@/hooks/useInput";
import { useRef } from "react";

interface ITextInputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  updateData: (path: string, value: any) => void;
}

export default function TextInput({
  id,
  label,
  placeholder,
  value,
  updateData,
}: ITextInputProps) {
  const { hasError, handleBlur } = useInput(value);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange() {
    updateData(id, inputRef.current?.value);
  }

  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full relative">
      <label htmlFor={id} className="text-[#022959] text-sm  w-full">
        {label}
      </label>
      {hasError && (
        <span className="absolute top-1 right-0 text-sm font-bold text-[#EE374A]">
          This field is required
        </span>
      )}
      <input
        ref={inputRef}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        type="text"
        id={id}
        className={`h-12 w-full px-4 font-medium border rounded-lg ${
          hasError ? "border-[#EE374A]" : "border-[#D6D9E6]"
        } placeholder-[#9699AA]`}
        placeholder={placeholder}
      />
    </div>
  );
}
