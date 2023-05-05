import "./App.css";
import Crud_Std from "./Component/Crud_Std";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Empcreate from "./Component/Empcreate";
import EmpEdit from "./EmpEdit";
import EmpDetails from "./EmpDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Crud_Std />} />
          <Route path="/student/create" element={<Empcreate />} />
          <Route path="/student/details/:empid" element={<EmpDetails />} />
          <Route path="/student/edit/:empid" element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
