import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Index from "./pages/Index";
import Undian from "./pages/Undian";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="/undian" exact>
          <Undian />
        </Route>
      </BrowserRouter>
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
