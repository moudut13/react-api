import {Component} from "react";

export default class Dashboard extends Component{
    render() {
        return(
            <div className="page-wrapper">
                <div className="page-content">
                    <div className="row row-cols-1 row-cols-lg-4">
                        <div className="col">
                            <div className="card radius-10 overflow-hidden bg-gradient-cosmic">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-white">Total Orders</p>
                                            <h5 className="mb-0 text-white">867</h5>
                                        </div>
                                        <div className="ms-auto text-white"><i className='bx bx-cart font-30'></i>
                                        </div>
                                    </div>
                                    <div className="progress bg-white-2 radius-10 mt-4" style={{height:'4.5px'}}>
                                        <div className="progress-bar bg-white" role="progressbar"
                                             style={{width: '46%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card radius-10 overflow-hidden bg-gradient-burning">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-white">Total Income</p>
                                            <h5 className="mb-0 text-white">$52,945</h5>
                                        </div>
                                        <div className="ms-auto text-white"><i className='bx bx-wallet font-30'></i>
                                        </div>
                                    </div>
                                    <div className="progress bg-white-2 radius-10 mt-4" style={{height:'4.5px'}}>
                                        <div className="progress-bar bg-white" role="progressbar"
                                             style={{width: '72%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card radius-10 overflow-hidden bg-gradient-Ohhappiness">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-white">Total Users</p>
                                            <h5 className="mb-0 text-white">24.5K</h5>
                                        </div>
                                        <div className="ms-auto text-white"><i className='bx bx-bulb font-30'></i>
                                        </div>
                                    </div>
                                    <div className="progress bg-white-2 radius-10 mt-4" style={{height:'4.5px'}}>
                                        <div className="progress-bar bg-white" role="progressbar"
                                             style={{width: '68%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card radius-10 overflow-hidden bg-gradient-moonlit">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-white">Comments</p>
                                            <h5 className="mb-0 text-white">869</h5>
                                        </div>
                                        <div className="ms-auto text-white"><i className='bx bx-chat font-30'></i>
                                        </div>
                                    </div>
                                    <div className="progress  bg-white-2 radius-10 mt-4" style={{height: '4.5px'}}>
                                        <div className="progress-bar bg-white" role="progressbar"
                                             style={{width: '66%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}