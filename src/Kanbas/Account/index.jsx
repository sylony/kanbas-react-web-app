import React, { useState } from 'react';

function Account() {

    const [is, setIs] = useState(0);
    return (
        <div className="tab-content flex-grow-1 " id="v-pills-tabContent" style={{ width: "100%" }}>
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                aria-labelledby="v-pills-home-tab" >
                <div className="row">
                    <div className="col-12">
                        <div className="mt-4">
                            <span className="fa fa-bars text-danger me-2"></span>
                            <span className="text-black">Jose Annunziato&apos;s Profile</span>
                        </div>
                        <hr />
                    </div>
                    <div className="col-2">
                        <div className="list-group">
                            <p
                                className="list-group-item list-group-item-action rounded-0 border-0 text-danger">Notifications</p>
                            <p
                                className="list-group-item list-group-item-action rounded-0 border-0 text-danger active">Profile</p>
                            <p
                                className="list-group-item list-group-item-action rounded-0 border-0 text-danger">Files</p>
                            <p
                                className="list-group-item list-group-item-action rounded-0 border-0 text-danger">Settings</p>
                            <p
                                className="list-group-item list-group-item-action rounded-0 border-0 text-danger">ePortfolios</p>
                            <p
                                className="list-group-item list-group-item-action rounded-0 border-0 text-danger">Shared
                                Content</p>
                            <p
                                className="list-group-item list-group-item-action rounded-0 border-0 text-danger">The
                                Hub</p>
                            <p
                                className="list-group-item list-group-item-action rounded-0 border-0 text-danger">Owickly
                                Course
                                Tools</p>
                            <p
                                className="list-group-item list-group-item-action rounded-0 border-0 text-danger">Global
                                Announcements</p>
                        </div>
                    </div>
                    <div className="col-6 mt-4" style={{ color: "black" }}>
                        <div className="row">
                            <div className="col-12">

                                {
                                    is ?
                                        <div className="person">

                                            <div>
                                                <i className='fa fa-user-circle perser-icon'></i>
                                                <p
                                                    onClick={_ => {
                                                        setIs(_ => _ = !is);
                                                    }}
                                                    className="float-end btn btn-light text-dark">
                                                    <span className="fa fa-pen me-2 text-muted"></span>Edit Profile
                                                </p>
                                            </div>
                                            <h1>
                                                Jose Annunziato
                                            </h1>
                                            <h2>
                                                Contact
                                            </h2>
                                            <p>
                                                No registered services, you can add some on the <span
                                                    className="text-danger">settings</span> page.
                                            </p>
                                            <h2>
                                                Biography
                                            </h2>
                                            <p>
                                                Faculty, Software Engineer,Al, Space, and renewables enthusiast.
                                            </p>
                                            <h2>
                                                inks
                                            </h2>
                                            <p className="text-danger" style={{ textDecoration: "none" }}>
                                                <i className="fa fa-link me-2 text-muted"></i>YouTube</p>
                                        </div>
                                        :
                                        <div className="person">
                                            <div>
                                                <i className='fa fa-user-circle perser-icon'></i>
                                                <p
                                                    onClick={_ => {
                                                        setIs(_ => _ = !is);
                                                    }}
                                                    className="float-end btn btn-light text-dark">
                                                    <span className="fa fa-pen me-2 text-muted"></span>Save Profile
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Name:*</label>
                                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                                    placeholder="Jose Annunziato" />
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    className="form-label">Pronouns:</label>
                                                <select className="form-select">
                                                    <option value="None">None</option>
                                                    <option value="None">None</option>
                                                    <option value="None">None</option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Title:</label>
                                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                                    placeholder="Jose Annunziato" />
                                            </div>
                                            <h2>Contact
                                            </h2>
                                            <p>
                                                No registered services, you can add some on the <span href="#">settings</span>
                                                page.

                                            </p>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Biography

                                                </label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                                    cols="40" rows="4"></textarea>
                                            </div>
                                            <h2>Links</h2>
                                            <p>
                                                <span className="fw-bold mx-4">Title</span>
                                                <span className="fw-bold mx-5">URL</span>
                                            </p>
                                            <p>
                                                <span>
                                                    <button className="btn btn-light">YouTuble</button>
                                                    <i className="fa fa-long-arrow-right"></i>
                                                    <button className="btn btn-light">youtuble</button>
                                                    <i className="fa fa-close text-danger"></i>
                                                </span>
                                            </p>
                                            <p>
                                                <button className="btn btn-light">Add other link</button>
                                            </p>

                                            <button className="btn btn-light"
                                            >cancel</button>
                                            <button className="btn btn-danger">save
                                                profile</button>
                                        </div >
                                }




                            </div>
                        </div>
                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                aria-labelledby="v-pills-profile-tab" >
                <div className="row">
                    <div className="col-12">
                        <span className="fs-1 text-danger">DASHBOARD</span>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-Courses" role="tabpanel"
                aria-labelledby="v-pills-Courses-tab" >
                <div className="row">
                    <div className="col-12">
                        <span className="fs-1 text-success">Courses</span>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Account;