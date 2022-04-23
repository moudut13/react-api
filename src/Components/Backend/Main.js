import Sidebar from "./Common/Sidebar";
import Header from "./Common/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Common/Footer";
import Home from "./Pages/Index/Home";
import Admin from "./Pages/User/Admin";
import Role from "./Pages/User/Role";
import Permission from "./Pages/User/Permission";
import User from "./Pages/User/User";


function Main(){
    return(
        <div className="wrapper">
            <BrowserRouter>
                <Sidebar/>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/role" element={<Role/>}/>
                    <Route path="/permission" element={<Permission/>}/>
                    <Route path="/user" element={<User/>}/>
                </Routes>
            </BrowserRouter>
            <div className="overlay toggle-icon"></div>
            <a className="back-to-top"><i className='bx bxs-up-arrow-alt'></i></a>
            <Footer/>
        </div>
    );
}
export default Main;