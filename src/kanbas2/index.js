import { Link, Route, Routes } from 'react-router-dom';
import Home from "./Home"
import Search from './Search';
import SignIn from './Signin';
import SignUp from './Signup';
import Account from './Account';
import Kanbas2Layout from './Kanbas2Layout';

function Kanbas2() {
    return (
        <div style={{ height: "1000px" }}>
            <Routes>
                <Route path="/" element={<Kanbas2Layout />}>
                    <Route index element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/:id" element={<Account />} />
                </Route>
            </Routes>
        </div>
    );
}

export default Kanbas2;
