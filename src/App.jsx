import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reservtion from "./pages/Reservtion";
import Contact from "./pages/Contact";
import Medical from "./pages/Medical";
import Nav from "./Component/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/حجز موعد" element={<Reservtion />} />
        <Route path="/تواصل" element={<Contact />} />
        <Route path="/حول العيادة" element={<Medical />} />
      </Routes>
    </>
  );
}

export default App;
