// import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>

            <div className="mt-2">
                <div>
                    <div className="d-flex justify-content-between">
                        <div style={{ width: "40%" }} >
                            <input type="text" className="form-control" placeholder="Search for Assignment"
                                style={{ width: "100%" }} />
                        </div>
                        <div>
                            <button className="btn btn-light ml-1"><i className="fa fa-add fs-10"></i>Group</button>
                            <button className="btn btn-danger"><i className="fa fa-add fs-10"></i>Assignments</button>
                            <button className="btn btn-light"><i className="fa fa-ellipsis-v fs-10"></i></button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-3">
                <div className="list-group">
                    {courseAssignments.map((assignment) => (
                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="list-group-item">


                            <li className="list-group-item align-items-center d-flex justify-content-between">
                                <div className="d-flex week align-items-center ">
                                    <i className="fa fa-ellipsis-v fs-5"></i>
                                    <i className="fa fa-book fs-5 m-3.5"></i>
                                    <div>
                                        <span className="title1">
                                            {assignment.title}
                                        </span>
                                        <br />
                                        <span>Week 0 - SETUP starting on Monday September 5th |
                                        </span>
                                        <br />
                                        <span>
                                            Due Sep 18,2022 at 11:59am | 100 pts
                                        </span>
                                    </div>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-check-circle  text-success fs-5 mr-2"></i>
                                    <i className="fa fa-ellipsis-v fs-5"></i>
                                </div>
                            </li>

                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}
export default Assignments;