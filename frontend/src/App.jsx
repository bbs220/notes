import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

function App() {
  return (
    <div className="font-inter sm:mx-1 mx-2 p-2 lg:p-4">
      <Home />
      <Toaster position="bottom-left" reverseOrder={true} />
    </div>
  );
}

export default App;
