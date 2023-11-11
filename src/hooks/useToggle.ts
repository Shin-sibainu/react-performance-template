import { useCallback, useState } from "react";

export const useToggle = (intialState: boolean) => {
  const [state, setState] = useState(intialState);

  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  return [state, toggle];
};
