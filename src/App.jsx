import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Index from "./pages/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact>
          <Index />
        </Route>
      </BrowserRouter>
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
