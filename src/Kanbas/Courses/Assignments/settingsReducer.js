import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
const initialState = {
    assignments: db.assignments,
    assignment: { course: "RS102", title: "Aerodynamics Quiz", _id: "A201" },
    currentId: null
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignments: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (item) => item._id !== action.payload
            );
        },
        updateAssignments: (state, action) => {
            state.assignments = state.assignments.map((item) => {
                if (item._id === action.payload._id) {
                    return action.payload;
                } else {
                    return item;
                }
            });
        },
    },
});
export const { addAssignments, deleteAssignment, updateAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;