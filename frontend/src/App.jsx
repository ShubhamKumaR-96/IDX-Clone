import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreateProject from "./pages/CreateProject";

const App = () => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
 <Routes>
  <Route path="/" element={<CreateProject />} />
 </Routes>
  );
};

export default App;
