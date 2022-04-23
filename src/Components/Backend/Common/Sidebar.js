import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Sidebar extends Component{
    render() {
        return(
            <div className="sidebar-wrapper" data-simplebar="true">
                <div className="sidebar-header">
                    <div>
                        <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon"/>
                    </div>
                    <div>
                        <h4 className="logo-text">Synadmin</h4>
                    </div>
                    <div className="toggle-icon ms-auto"><i className='bx bx-first-page'></i>
                    </div>
                </div>
                {/*navigation*/}
                <ul className="metismenu" id="menu">
                    <li>
                         <Link to="/">
                            <div className="parent-icon">
                                <i className='bx bx-home'></i>
                            </div>
                            <div className="menu-title">Dashboard</div>
                        </Link>
                    </li>

                    <li className="menu-label">UI Elements</li>
                    <li>
                        <a href="javascript:;" className="has-arrow">
                            <div className="parent-icon"><i className='bx bx-home'></i>
                            </div>
                            <div className="menu-title">User</div>
                        </a>
                        <ul>
                            <li>
                                <Link to="/admin">
                                    <i className="bx bx-right-arrow-alt"></i>
                                    <div className="menu-title">Admin</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/role">
                                    <i className="bx bx-right-arrow-alt"></i>
                                    <div className="menu-title">Role</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/permission">
                                    <i className="bx bx-right-arrow-alt"></i>
                                    <div className="menu-title">Permission</div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/user">
                                    <i className="bx bx-right-arrow-alt"></i>
                                    <div className="menu-title">User</div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}