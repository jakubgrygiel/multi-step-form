import { useState } from "react";

export default function useInput(value: string) {
  const [isTouched, setIsTouched] = useState(false);

  const hasError = value === "" && isTouched;

  function handleBlur() {
    setIsTouched(true);
  }

  return { hasError, handleBlur };
}
