import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";
import { Toaster } from "react-hot-toast";
import HeaderNav from "./Component/HeaderNav";
import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";

function App() {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signUp" element={<SignUp></SignUp>}></Route>
            </Routes>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}

export default App;
