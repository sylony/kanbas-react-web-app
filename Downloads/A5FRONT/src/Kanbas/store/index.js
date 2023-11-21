import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import settingsReducer from "../Courses/Assignments/settingsReducer";
const store = configureStore({
    reducer: {
        modulesReducer,
        settingsReducer
    }
});
export default store;