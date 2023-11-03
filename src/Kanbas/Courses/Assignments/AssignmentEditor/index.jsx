// import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import { addAssignments, deleteAssignments, updateAssignments } from "../settingsReducer";
import { useState } from "react";

function AssignmentEditor() {
    const { assignmentId } = useParams();

    const assignments = useSelector((state) => state.settingsReducer.assignments);
    const assignment = useSelector((state) => state.settingsReducer.assignment);
    const dispatch = useDispatch();



    const [item, setItem] = useState(assignments.filter(item => item._id === assignmentId)[0])


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div style={{ padding: "10px" }}>
            <h2>Assignment Name</h2>
            <input value={item.title} className="form-control mb-2"
                onChange={(e) => {
                    setItem({ ...item, title: e.target.value })
                    // dispatch(updateAssignments(assignments))
                }

                } />
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
                Cancel
            </Link>
            <button onClick={() => { dispatch(updateAssignments(item)); handleSave() }} className="btn btn-success m-2">
                Save
            </button>
        </div>
    );
}
export default AssignmentEditor;