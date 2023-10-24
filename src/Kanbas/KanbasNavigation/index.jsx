import { Link, useLocation } from "react-router-dom";
function KanbasNavigation() {
    const links = [
        {
            link: "Account",
            icon: "fa-user"
        },
        {
            link: "Dashboard",
            icon: "fa-tachometer"
        },
        {
            link: "Courses",
            icon: "fa-dashboard"
        },
        {
            link: "Calendar",
            icon: "fa-table"
        },
    ];
    const { pathname } = useLocation();
    return (

        <div className="list-group" >

            <div className="nav flex-column nav-pills me-3 bg-dark" id="v-pills-tab" role="tablist"
                aria-orientation="vertical">
                <div style={{ height: "80px" }}></div>


                {links.map((item, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/${item.link}`}
                        className={`flex justify-center ${pathname.includes(item.link) && "active"}`}>
                        <button className="nav-link rounded-0 text-white p-3" id="v-pills-profile-tab"
                            type="button" role="tab"
                            style={{ margin: "0 auto" }}
                        >
                            <div><i className={
                                [item.icon + " fa text-danger fs-3"]
                            }></i></div>
                            <div>{item.link}</div>
                        </button>
                    </Link>
                ))}


                <button className="nav-link rounded-0 text-white p-3" id="v-pills-profile-tab"
                    type="button" role="tab" style={{ margin: "0 auto" }}
                >
                    <div><i className="fa fa-diamond text-danger fs-3"></i></div>
                    <div>Inbox
                    </div>
                </button>
                <button className="nav-link rounded-0 text-white p-3" id="v-pills-profile-tab"
                    type="button" role="tab" style={{ margin: "0 auto" }}
                >
                    <div><i className="fa fa-edit text-danger fs-3"></i></div>
                    <div>History
                    </div>
                </button>
                <button className="nav-link rounded-0 text-white p-3" id="v-pills-profile-tab"
                    type="button" role="tab" style={{ margin: "0 auto" }}
                >
                    <div><i className="fa fa-inbox text-danger fs-3"></i></div>
                    <div>Studio
                    </div>
                </button>
                <button className="nav-link rounded-0 text-white p-3" id="v-pills-profile-tab"
                    type="button" role="tab" style={{ margin: "0 auto" }}
                >
                    <div><i className="fa fa-sign-out text-danger fs-3"></i></div>
                    <div>Commons</div>
                </button>
                <button className="nav-link rounded-0 text-white p-3" id="v-pills-profile-tab"
                    type="button" role="tab" style={{ margin: "0 auto" }}
                >
                    <div><i className="fa fa-info-circle text-danger fs-3"></i></div>
                    <div>Help</div>
                </button>
            </div>

            {/* <h1>nav</h1> */}


        </div>
    );
}
export default KanbasNavigation;