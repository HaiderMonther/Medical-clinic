import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Medical from "./pages/Medical";
import Nav from "./Component/Nav";
import BookNow from "./Component/BookNow";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/حجز موعد" element={<Reservation />} />
        <Route path="/طلب حجز" element={<BookNow />} />
        <Route path="/تواصل" element={<Contact />} />
        <Route path="/حول العيادة" element={<Medical />} />
      </Routes>
    </>
  );
}

export default App;
