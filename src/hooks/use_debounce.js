import { useState, useEffect } from "react";

const useDebounce = (debounceValue, delay) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    let id = setTimeout(() => {
      setValue(debounceValue);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [debounceValue, delay]);

  return value;
};

export default useDebounce;
