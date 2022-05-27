import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <div>
            <Home></Home>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}

export default App;
