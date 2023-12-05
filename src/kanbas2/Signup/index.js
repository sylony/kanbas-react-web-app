import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "../client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/Kanbas2/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Signin</h1>
            <div>
                <input className="form-control" placeholder="username..."
                    value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            </div>
            <div style={{ margin: "10px 0" }}>
                <input className="form-control" placeholder="password..."
                    value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
            </div>
            <button onClick={signup} className={"btn btn-primary"} style={{ width: "100%" }}> Signin </button>
        </div>
    );
}
export default Signup;