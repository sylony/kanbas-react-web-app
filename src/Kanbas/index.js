import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account"
import Nav from "../Nav";
function Kanbas() {
  return (
    <div className="" >
      <div>
        <Nav />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <KanbasNavigation className="" style={{ width: "25%" }} />
        <div className="" style={{ width: "75%", flex: "1 1 0%", display: "flex", gapX: "20px" }}>

          <Routes >
            <Route path="/" element={<Navigate to="Kanbas/Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses" element={<Courses />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Kanbas;