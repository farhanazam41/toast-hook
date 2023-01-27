import { useState } from "react";

const useToastMessage = () => {
  const [toastMessage, setToastMessage] = useState({
    bg: "",
    message: "",
    isLoading: false
  });

  const handleToastMessage = (bg, message, isLoading, timeout) => {
    setToastMessage({
      bg,
      message,
      isLoading
    });
    setTimeout(() => {
      setToastMessage({
        ...toastMessage,
        isLoading: false
      });
    }, timeout);
  };

  return { toastMessage, handleToastMessage };
};

export default useToastMessage;
