import { useState } from "react";

export const useDialogControls = (defaultVisible = false) => {
  const [visible, setVisible] = useState(defaultVisible);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const toggle = (nextVisible) => {
    if (typeof nextVisible !== "undefined") {
      setVisible(nextVisible);
    } else {
      setVisible((previousVisible) => !previousVisible);
    }
  };

  return { hide, show, toggle, visible };
};
