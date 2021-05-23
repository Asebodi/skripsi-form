import { BrowserRouter, Route } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact>
          <Index />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
