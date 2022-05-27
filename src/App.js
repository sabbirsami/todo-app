import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";
import { Toaster } from "react-hot-toast";
import HeaderNav from "./Component/HeaderNav";

function App() {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Home></Home>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}

export default App;
