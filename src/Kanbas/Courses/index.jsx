import db from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    // console.log('啊', db.courses)
    return (
        <div className="w-full">
            <div className="d-flex align-items-center w-100 justify-content-between">
                <div className="d-flex align-items-center">
                    <span className="fa fa-bars text-danger me-2"></span>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">Course</li>
                        {
                            course ? <li className="breadcrumb-item active">{course.name}</li> : ''
                        }
                    </ol>
                </div>

            </div>
            <hr className="my-2" />

            <div className="flex">
                <CourseNavigation />
                <div className="w-8/12 flex-1">
                    <div className="flex flex-col">
                        <div className="list-group">
                            <Routes>
                                <Route path="/" element={<Navigate to="Home" />} />
                                <Route path="Home" element={<Home />} />
                                <Route path="Modules" element={<Modules />} />
                                <Route path="Assignments" element={<Assignments />} />
                                <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                                <Route path="Grades" element={<Grades />} />
                            </Routes>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Courses;