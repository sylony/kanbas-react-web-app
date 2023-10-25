// import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
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
                    <ul className="list-group">
                        {
                            modules
                                .filter((module) => module.course === courseId)
                                .map((module, index) => (
                                    <li key={index} className=" my-2 border p-3 rounded-lg align-items-center d-flex justify-content-between">
                                        <div>
                                            <i className="fa fa-ellipsis-v fs-5"></i>
                                            <span> {module.name}</span>
                                            <p>{module.description}</p>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-check-circle  text-success fs-5"></i>
                                            <i className="fa fa-ellipsis-v fs-5 ml-2"></i></div>
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