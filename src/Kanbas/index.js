import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account"
import Nav from "../Nav";
function Kanbas() {
    return (
      <div className="flex justify-center">
        <KanbasNavigation className="w-3/12" />
        <div className="w-9/12 flex-1">
          <Nav />
          <Routes style={{ display: "flex", gapX: "20px" }}>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Kanbas/Account" element={<Account />} />
            <Route path="Kanbas/Dashboard" element={<Dashboard />} />
            <Route path="Kanbas/Courses" element={<Courses />} />
            <Route path="Kanbas/Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    );
}
export default Kanbas;