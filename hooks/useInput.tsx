import { useEffect, useState } from "react";

export default function useInput(value: string, checkInputs: boolean) {
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (checkInputs) {
      handleBlur();
    }
  }, [checkInputs]);

  const hasError = value.trim() === "" && isTouched;

  function handleBlur() {
    setIsTouched(true);
  }

  return { hasError, handleBlur };
}
