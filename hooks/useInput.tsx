import { useEffect, useState } from "react";

export default function useInput(value: string, checkInputs: boolean) {
  const [isTouched, setIsTouched] = useState(false);

  const hasError = value === "" && isTouched;

  console.log(checkInputs);

  useEffect(() => {
    if (checkInputs) {
      handleBlur();
    }
  }, [checkInputs]);

  function handleBlur() {
    setIsTouched(true);
  }

  return { hasError, handleBlur };
}
