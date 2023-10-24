import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
    const courses = db.courses;
    console.log('courses_data', courses)
    return (
        <div className="w-full">
            <h1>Dashboard</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4 wd-dashboard-grid gap-4">

                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item col-xs-12 col-sm-6 col-md-4 col-lg-3 w-72">
                        <div className="card h-100">
                            <div className="card-top" ></div>
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>
                                <h5 className="card-title">{course.number}</h5>
                                <div className="card-text">
                                    <p> startDate: <span className="ml-2">{course.startDate}</span></p>
                                    <p>endDate: <span className="ml-2">{course.endDate}</span></p>
                                    id:{course._id}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>



        </div>

    );
}
export default Dashboard;