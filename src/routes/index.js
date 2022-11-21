import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../components/Menu";

export const AppRouter = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};
