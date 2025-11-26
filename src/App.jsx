import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Form,
} from "react-router-dom";
import Home from "./Components/Home";
import MaterialList from "./Components/MaterialList";
import AddMateriall from "./Components/AddMaterial";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/material" element={<MaterialList />} />
        <Route path="/addmaterial" element={<AddMateriall />} />
        <Route path="/material/edit/:id" element={<AddMateriall />} />
      </Routes>
    </Router>
  );
};

export default App;
