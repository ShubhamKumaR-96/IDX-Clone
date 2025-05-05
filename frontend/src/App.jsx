import { useState } from "react";
import "./App.css";
import TestPingComponent from "./components/atoms/TestPing.jsX";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <TestPingComponent />}
    </>
  );
};

export default App;
