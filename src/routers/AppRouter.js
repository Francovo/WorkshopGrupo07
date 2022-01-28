import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login-Registro/Login";
import Registro from "../components/Login-Registro/Registro";
import Preguntas from "../components/Preguntas/Preguntas";

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/Preguntas/:Tipo/" element={<Preguntas/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
