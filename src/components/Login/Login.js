import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginContext from '../Context/LoginContext';
import UserContext from '../Context/UserContext';

function Login() {
    const userdata = useContext(UserContext)
    const logindata = useContext(LoginContext);

    const navigate = useNavigate();
    return (
        
        <section className="vh-100 mt-5 pt-3" >

            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzaJKooV-K25PtxV31w5jNlolhaE5HP3fBQ&usqp=CAU"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        
                        <form>

                            
                            <div className="form-outline mb-3">
                            <label className="form-label" For="form3Example3">Username :</label>
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a username" required onChange={(event) => userdata.setUsername(event.target.value)} />
                                
                            </div>

                            
                            <div className="form-outline mb-3">
                            <label className="form-label" For="form3Example4">Password :</label>
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password..." required />
                                
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" For="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="d-flex ms-3" >
                                <button onClick={() => {
                                    logindata.setLibrarianVisible(true);
                                    navigate("/portal/dashboard")
                                }} type="button" className="btn   mt-2"
                                    style={{ paddingRight: "2.5rem" }}>
                                    <div className="card" style={{ width: "8rem", height: "8rem" }}>
                                        <img className="card-img-top pb-5" src="data:image/jpeg;base64,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" alt="admin image" />
                                    </div><p>Admin</p>
                                </button>
                                <button onClick={() => {
                                    logindata.setLibrarianVisible(false);
                                    navigate("/portal/book")
                                }} type="button" className="btn   mt-2"
                                    style={{ paddingRight: "2.5rem" }}>
                                    <div className="card" style={{ width: "8rem", height: "8rem" }}>
                                        <img className="card-img-top pb-5" src="data:image/png;base64,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" alt="user image" />
                                    </div><p>User</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        </section >
    )
}

export default Login
