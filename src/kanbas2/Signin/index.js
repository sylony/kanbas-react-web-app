import * as client from "../client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/kanbas2/account");
    };

    return (
        <div>
            <h1>Signin</h1>
            <div>
                <input className="form-control" placeholder="username..."
                    value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            </div>
            <div style={{ margin: "10px 0" }}>
                <input className="form-control"  placeholder="password..."
                    value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
            </div>
            <button onClick={signin} className={"btn btn-primary"} style={{ width: "100%" }}> Signin </button>
        </div>
    );
}
export default Signin;