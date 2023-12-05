import axios from "axios";
const COURSES_URL = "https://kanbas44.onrender.com/api/courses";

export const createModule = async (courseId, module) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/modules`,
        module
    );
    return response.data;
};

export const findModulesForCourse = async (courseId) => {
    const response = await axios
        .get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
}

const MODULES_URL = "https://kanbas44.onrender.com/api/modules";
export const deleteModule_ac = async (moduleId) => {
    const response = await axios
        .delete(`${MODULES_URL}/${moduleId}`);
    return response.data;
};


export const updateModule_ac = async (module) => {
    const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
};

