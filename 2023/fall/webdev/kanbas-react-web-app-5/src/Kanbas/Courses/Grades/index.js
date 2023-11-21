import db from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div className="d-flex justify-content-end align-items-center">

                <div className="" style={{ display: "flex", columnGap: "16px" }}>
                    <button className="btn btn-light"><i className="fa fa-sign-in fs-10"></i>
                        Published
                    </button>
                    <button className="btn btn-light"><i className="fa fa-sign-out  fs-10"></i>
                        Published
                    </button>
                    <button className="btn btn-light"><i className="fa fa-cog fs-10"></i></button>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-6 font-bold text-xl"><h5>Student Names</h5></div>
                <div className="col-6 font-bold text-xl"><h5>Student Names</h5></div>
            </div>

            <div className="row mt-3">
                <div className="col-6"><div className="input-group">
                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" placeholder="Search Students" />
                    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </div></div>
                <div className="col-6"><div className="input-group">
                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" placeholder="Search Assignments" />
                    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </div></div>
            </div>

            <div className="table-responsive mt-6">
                <table className="table">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment, index) => (<th key={index}>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment, index) => {
                            const user = db.users.find(user => user._id === enrollment.user);
                            return (
                                <tr key={index}>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment, index) => {
                                        const grade = db.grades.find(grade => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td key={index}>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;