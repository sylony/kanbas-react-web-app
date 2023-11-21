import { Link } from "react-router-dom";
import db from "../Database";
import { React, useState } from "react";
function Dashboard({ courses, course, setCourse, addNewCourse,deleteCourse, updateCourse } ) {
    // const courses = db.courses;
    // console.log('courses_data', courses)

    // const [courses, setCourses] = useState(db.courses);
    // console.log('courses', courses)

    // const [course, setCourse] = useState({
    //     name: "New Course", number: "New Number",
    //     startDate: "2023-09-10", endDate: "2023-12-15",
    // });

    // const addNewCourse = () => {
    //     setCourses([...courses,
    //     {
    //         ...course,
    //         _id: new Date().getTime()
    //     }]);
    // };

    // const deleteCourse = (courseId) => {
    //     setCourses(courses.filter((course) => course._id !== courseId));
    // };

    // const updateCourse = () => {
    //     setCourses(
    //         courses.map((c) => {
    //             if (c._id === course._id) {
    //                 return course;
    //             } else {
    //                 return c;
    //             }
    //         })
    //     );
    // };

    return (
        <div className="" style={{ width: "1005" }}>
            <h1>Dashboard</h1>
            <hr />
            {/* form */}
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            {/* control */}
            <div className={"flex"}>
                <button onClick={addNewCourse} type="button" className="btn btn-success">
                    Add
                </button>

                <button onClick={updateCourse} type="button" className="btn btn-primary" style={{ margin: "10px" }}>
                    Update
                </button>
            </div>

            <hr />
            
            {/* <div className="row row-cols-1 row-cols-md-3 g-4 wd-dashboard-grid gap-4">

                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item col-xs-12 col-sm-6 col-md-4 col-lg-3"
                        style={{ width: "288px", }}>
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

            </div> */}

            <div className="list-group">
                {courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item" style={{ display: "flex", alignItems: "center" }}>
                        <p style={{ width: "400px", margin: "0" }}>
                            {course.name}
                        </p>

                        <button type="button" className="btn btn-warning m-2"
                            onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                            }}>
                            Edit
                        </button>

                        <button type="button" className="btn btn-danger"
                            onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                            }}>
                            Delete
                        </button>

                    </Link>
                ))}
            </div>



        </div>

    );
}
export default Dashboard;