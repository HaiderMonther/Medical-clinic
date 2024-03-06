import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Medical from "./pages/Medical";
import BookNow from "./Component/BookNow";
import Dashboard from "./dashboard/page/Dashboard";
import Consulting from "./dashboard/page/Consulting";
import Patient from "./dashboard/page/Patient";
import ReservedTime from "./dashboard/page/ReservedTime";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/حجز موعد" element={<Reservation />} />
        <Route path="/طلب حجز" element={<BookNow />} />
        <Route path="/تواصل" element={<Contact />} />
        <Route path="/حول العيادة" element={<Medical />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/Consulting" element={<Consulting />} />
        <Route path="/Patient" element={<Patient />} />
        <Route path="/ReservedTime" element={<ReservedTime />} /> */}
      </Routes>
    </>
  );
}

export default App;
