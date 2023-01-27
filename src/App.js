import "./styles.css";
import Toast from "./Toast";
import useToastMessage from "./useToastMessage";

export default function App() {
  const { toastMessage, handleToastMessage } = useToastMessage();
  const { isLoading, bg, message } = toastMessage;

  const handleButtons = (type) => {
    if (type === "success") {
      handleToastMessage("green", "Success", true, 3000);
    } else if (type === "error") {
      handleToastMessage("red", "Error", true, 3000);
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => handleButtons("success")}>Success</button>
      <button onClick={() => handleButtons("error")}>Error</button>
      {isLoading && <Toast message={message} bg={bg} />}
    </div>
  );
}
