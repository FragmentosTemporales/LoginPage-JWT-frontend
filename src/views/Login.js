import { Link } from "react-router-dom";

const Login = () => {

    return (
        <div className="container mt-4">
            <div className="border border-dark shadow-lg m-4 p-2">
                <div className="m-4">
                    <form>
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example1" className="form-control" />
                            <label className="form-label" for="form2Example1">Email</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" class="form-control" />
                            <label className="form-label" for="form2Example2">Password</label>
                        </div>

                        <div className="text-center">
                        <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
                        </div>
                        <div className="text-center">
                            <p>Not a member? <Link to="/Register">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Login;