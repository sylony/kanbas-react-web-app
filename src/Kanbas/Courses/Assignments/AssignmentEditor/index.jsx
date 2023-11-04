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



    const [item, setItem] = useState(assignments.filter(item => item._id === assignmentId)[0] || assignment)


    console.log('assignmentItem values->', item)

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    const setItemCallBack = (e) => {
        setItem({ ...item, ...e })
    }

    return (
        <div style={{ padding: "10px" }}>
            <h2>Assignment Name</h2>
            <input className="form-control mb-2"
                value={item.title} onChange={e => setItemCallBack({ title: e.target.value })} />

            <textarea className="form-control" aria-label="With textarea" placeholder="New Assignment Description"
                value={item.description} onChange={e => setItemCallBack({ description: e.target.value })}
            ></textarea>

            <div className="mt-3">
                <label className="form-label">Due</label>
                <input placeholder="Due" className="form-control" type="date"
                    value={item.dueDate || ''} onChange={e => setItemCallBack({ dueDate: e.target.value })}
                />
            </div>
            <div className="d-flex mt-3" style={{ gap: "0 20px" }}>
                <div className="" style={{ width: "50%" }}>
                    <label className="form-label">Available from</label>
                    <input placeholder="Due" className="form-control" type="date"
                        value={item.availableFromDate || ''} onChange={e => setItemCallBack({ availableFromDate: e.target.value })}
                    />
                </div>
                <div className="" style={{ width: "50%" }}>
                    <label className="form-label">Until</label>
                    <input placeholder="Due" className="form-control" type="date"
                        value={item.availableUntilDate || ''} onChange={e => setItemCallBack({ availableUntilDate: e.target.value })}
                    />
                </div>
            </div>

            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
                Cancel
            </Link>
            <button onClick={() => {
                // Edit
                if (assignmentId) dispatch(updateAssignments(item))
                // Add
                else dispatch(addAssignments(item))
                // Finally return to superiors page
                handleSave()

            }} className="btn btn-success m-2">
                {assignmentId ? 'Save the assignment' : 'Add the assignment'}
            </button>
        </div >
    );
}
export default AssignmentEditor;