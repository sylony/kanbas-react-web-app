import * as client from "../client";
import { useState, useEffect } from "react";
import { useNavigate, NavLink, useParams, navigate } from "react-router-dom";
function Account() {

    const navigate = useNavigate();

    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, [])

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas2/signin");
    };




    return (
        <div className="" style={{ width: "500px" }}>
            <h1>Account</h1>
            {account && (
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div>
                        <input value={account.username}
                            placeholder="username..."
                            className="form-control"
                            onChange={(e) => setAccount({
                                ...account,
                                username: e.target.value
                            })} />
                    </div>
                    <div>
                        <input value={account.password}
                            className="form-control"
                            onChange={(e) => setAccount({
                                ...account,
                                password: e.target.value
                            })} />
                    </div>
                    <div>
                        <input value={account.firstName}
                            className="form-control"
                            onChange={(e) => setAccount({
                                ...account,
                                firstName: e.target.value
                            })} />
                    </div>
                    <div>
                        <input value={account.lastName}
                            className="form-control"
                            onChange={(e) => setAccount({
                                ...account,
                                lastName: e.target.value
                            })} />
                    </div>
                    <div>
                        <input value={account.dob}
                            className="form-control"
                            type={"date"}
                            onChange={(e) => setAccount({
                                ...account,
                                dob: e.target.value
                            })} />
                    </div>
                    <div>
                        <input value={account.email}
                            className="form-control"
                            onChange={(e) => setAccount({
                                ...account,
                                email: e.target.value
                            })} />
                    </div>
                    <select className="form-select"
                        onChange={(e) => setAccount({
                            ...account,
                            role: e.target.value
                        })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>

                    <button onClick={save} className={"btn btn-primary"}>
                        Save
                    </button>
                    <NavLink to="/Kanbas2" style={{ textDecoration: "auto", backgroundColor: "transparent", width: "100%" }} >
                        <button className={"btn btn-warning"} style={{ width: "100%" }}>
                            Users
                        </button>
                    </NavLink>
                    <button onClick={signout} className={"btn btn-danger"} style={{ width: "100%" }}>
                        Signout
                    </button>
                </div>
            )}
        </div>
    );
}
export default Account;