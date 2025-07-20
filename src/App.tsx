import { SupportChat } from "./components/SupportChat/SupportChat";
import { Home } from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Home />
      <SupportChat />
      <ToastContainer position="bottom-center" autoClose={3500} />
    </>
  );
}

export default App;
