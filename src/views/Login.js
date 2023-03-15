import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/context";

const Login = () => {
    const { store, actions } = useContext(Context)
    return (
        <div className="container mt-4">
            <div 
            style={{ borderRadius: '5px' }}
            className="border border-dark shadow-lg m-4 p-2">
                <div className="m-4">
                    <form>
                        <div className="form-outline mb-4">
                            <input 
                            onChange={actions.handleChange}
                            type="email" 
                            id="email"
                            name="email"
                            className="form-control" />
                            <label 
                            className="form-label" 
                            htmlFor="email">Email</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input 
                            onChange={actions.handleChange}
                            type="password" 
                            id="password"
                            name="password"
                            class="form-control" />
                            <label 
                            className="form-label" 
                            htmlFor="password">Password</label>
                        </div>

                        <div className="text-center">
                        <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
                        </div>
                        <div className="text-center">
                            <p><Link to="/recoverpass">forgot your password?</Link></p>
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