// import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, setModules } from "./modulesReducer";
import { findModulesForCourse, createModule, deleteModule_ac, updateModule_ac } from "./client"

function ModuleList() {
    const { courseId } = useParams();
    // const modules = db.modules;
    // const [modules, setModules] = useState(db.modules);

    // const [module] = useState({
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    // });

    const handleDeleteModule = (moduleId) => {
        deleteModule_ac(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleUpdateModule = async (module) => {
        const status = await updateModule_ac(module);
        dispatch(updateModule(module));
    };


    // const addModule = (module) => {
    //     setModules([
    //         { ...module, _id: new Date().getTime().toString() },
    //         ...modules,
    //     ]);
    // };

    // const deleteModule = (itemId) => {
    //     console.log(itemId)
    //     setModules(modules.filter(
    //         (itemModule) => itemModule._id !== itemId));
    // };

    // const updateModule = () => {
    //     setModules(
    //         modules.map((m) => {
    //             if (m._id === module._id) {
    //                 return module;
    //             } else {
    //                 return m;
    //             }
    //         })
    //     );
    // }

    return (
        <div>

            <div className="" style={{ display: "flex", columnGap: "16px" }}>

                <div className="w-9/12">
                    <div className="d-flex mb-6  justify-content-end" style={{ display: "flex", columnGap: "12px" }}>
                        <button className="btn btn-light mr-1">Collapse All</button>
                        <button className="btn btn-light ml-1">View Progress</button>
                        <div className="dropdown">
                            <button className="btn btn-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Publish All
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button className="btn btn-danger"><i className="fa fa-add fs-10"></i>Module</button>
                        <button className="btn btn-light"><i className="fa fa-ellipsis-v fs-10"></i></button>
                    </div>
                    <ul className="list-group" style={{ marginTop: "20px" }}>

                        <li className="list-group-item">
                            <div>
                                <button type="button" className="btn btn-success" style={{ marginRight: "10px" }} onClick={handleAddModule} >Add</button>
                                {/* <button type="button" className="btn btn-success" style={{ marginRight: "10px" }} onClick={() => dispatch(addModule({ ...module, course: courseId }))} >Add</button> */}
                                <button type="button" className="btn btn-success" onClick={() => handleUpdateModule(module)} >Update {module._id}</button>
                                {/* <button type="button" className="btn btn-success" onClick={() => dispatch(updateModule(module))} >Update {module._id}</button> */}
                            </div>


                            <textarea className="form-control" aria-label="With textarea" style={{ margin: "10px 0" }}
                                value={module.name}
                                onChange={(e) =>
                                    dispatch(setModule({ ...module, name: e.target.value }))
                                }>
                            </textarea>
                            <textarea className="form-control" aria-label="With textarea"
                                value={module.description}
                                onChange={(e) =>
                                    dispatch(setModule({ ...module, description: e.target.value }))
                                }>
                            </textarea>
                        </li>

                        {
                            modules
                                .filter((item) => item.course === courseId)
                                .map((item, index) => (
                                    <li key={index} className="list-group-item" style={{ position: "relative" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>


                                            <button type="button" className="btn btn-warning" style={{ marginRight: "10px" }}
                                                onClick={() => dispatch(setModule(item))}>
                                                Edit
                                            </button>

                                            <button type="button" className="btn btn-danger"
                                                onClick={() => handleDeleteModule(item._id)} >
                                                Delete
                                            </button>

                                            {/* <button type="button" className="btn btn-danger"
                                                onClick={() => dispatch(deleteModule(item._id))} >
                                                Delete
                                            </button> */}


                                        </div>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                        <p>{item._id}</p>
                                    </li>
                                ))
                        }
                    </ul>
                </div>
                <div className="col-3 d-none d-lg-block " style={{ width: "25%", paddingRight: "1.5rem" }}>
                    <p>Course Status</p>
                    <div className="d-flex"><button className="btn btn-light border">Unpublish</button>
                        <button className="btn btn-success border">Published</button></div>
                    <div className="btns" style={{ display: "flex", flexDirection: "column", rowGap: "8px" }}>
                        <button className="btn  mt-3 btn-light border"><i className="fa fa-location-arrow" ></i>Import Existing Content</button>
                        <button className="btn btn-light border"><i className="fa fa-medkit"></i>Import Fro
                            ommons</button>
                        <button className="btn btn-light border"><i className="fa fa-cloud-upload" ></i>Choose Home Page</button>
                        <button className="btn btn-light border"><i className="fa fa-spinner" ></i>liew Course Stream</button>
                        <button className="btn btn-light border"><i className="fa fa-share" ></i>New Announcement</button>
                        <button className="btn btn-light border"><i className="fa fa-sign-in" ></i>vew Analytics</button>
                    </div>
                    <h5 className="mt-2">To Do</h5>
                    <hr />
                </div>
            </div>
        </div>
    );
}
export default ModuleList;