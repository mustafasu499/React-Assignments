import { Route, Routes } from "react-router-dom";
import Home from "./Screen/Home";
import CreatePage from "./Screen/CreatePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreatePage />} />
      </Routes>
    </>
  );
}

export default App;
