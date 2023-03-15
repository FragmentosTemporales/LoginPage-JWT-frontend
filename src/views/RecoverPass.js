import { Link } from "react-router-dom";

const RecoverPass = () => {

    return (
        <div className="container mt-4 ">
            <div 
            style={{ borderRadius: '5px' }}
            className="border border-dark shadow-lg m-4 p-2">
                <div className="m-4">
                    <form>
                        <div className="form-outline mb-4">
                            <input type="email" id="form2Example1" className="form-control" />
                            <label className="form-label" for="form2Example1">Email</label>
                        </div>

                        <div className="text-center">
                            <button type="button" className="btn btn-primary btn-block mb-4">Send</button>
                        </div>
                        <div className="text-center">
                            <p><Link to="/home">Back to Home</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default RecoverPass;