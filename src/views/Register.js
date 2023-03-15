import { Link } from "react-router-dom";

const Register = () => {

    return (
        <div className="container mt-4">
            <div className="border border-dark shadow-lg m-4">
                <div className="m-4">
                    <form>
                        <div className="row d-flex justify-content-around p-2">
                            <div className="form-outline mb-4 col-6">
                                <input type="text" id="form2Example1" className="form-control" />
                                <label className="form-label" for="form2Example1">Name</label>
                            </div>
                            <div className="form-outline mb-4 col-6">
                                <input type="text" id="form2Example1" className="form-control" />
                                <label className="form-label" for="form2Example1">Last name</label>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-around p-2">
                        <div className="form-outline mb-4 col-6">
                            <input type="email" id="form2Example1" className="form-control" />
                            <label className="form-label" for="form2Example1">Email</label>
                        </div>
                        <div className="form-outline mb-4 col-6">
                            <input type="password" id="form2Example2" class="form-control" />
                            <label className="form-label" for="form2Example2">Password</label>
                        </div>
                        </div>

                        <div className="text-center">
                            <button type="button" className="btn btn-primary btn-block mb-4">Submit</button>
                        </div>
                        <div className="text-center">
                            <p>A member? <Link to="/Login">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Register;