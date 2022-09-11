import { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
