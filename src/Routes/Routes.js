import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Projects from "../Components/Projectss/Projects";

const RoutesGlobal = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projetos" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesGlobal;
