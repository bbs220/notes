import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

function App() {
  return (
    <div className="font-inter p-1 lg:p-3">
      <Home />
      <Toaster position="bottom-left" reverseOrder={true} />
    </div>
  );
}

export default App;
