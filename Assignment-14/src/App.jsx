import { Route, Routes } from "react-router-dom";
import Home from "./Screen/Home";
import CreatePage from "./Screen/CreatePage";
import EditUser from "./Screen/EditUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
