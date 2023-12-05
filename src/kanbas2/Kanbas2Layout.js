import { NavLink, Outlet } from 'react-router-dom';

function Kanbas2Layout() {
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    };

    return (
        <div style={{ padding: "100px" }}>
            <main style={{display:"flex", height:"200px"}}>

                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <NavLink to="/Kanbas2" end className={({ isActive }) => isActive ? "btn btn-outline-dark active" : "btn btn-outline-dark"}>Home</NavLink>
                    <NavLink to="/Kanbas2/search" style={({ isActive }) => isActive ? activeStyle : null} className="btn btn-outline-dark">Search</NavLink>
                    <NavLink to="/Kanbas2/signin" style={({ isActive }) => isActive ? activeStyle : null} className="btn btn-outline-dark">Signin</NavLink>
                    <NavLink to="/Kanbas2/signup" style={({ isActive }) => isActive ? activeStyle : null} className="btn btn-outline-dark">Signup</NavLink>
                    <NavLink to="/Kanbas2/account" style={({ isActive }) => isActive ? activeStyle : null} className="btn btn-outline-dark">Account</NavLink>
                </div>

                <div style={{paddingLeft:"50px"}}>
                    <Outlet />
                </div>

            </main>
        </div>
    );
}

export default Kanbas2Layout;
