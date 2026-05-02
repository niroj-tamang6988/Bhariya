

function Login () {



    return(

        <>
        
        <div className="login-modal" id="login-modal">
        <div className="login-modal-content">
            <button className="login-modal-close" id="login-modal-close">&times;</button>
            <div className="login-modal-header">
                <h2>Welcome to Bhariyaa</h2>
                <p>Sign in to your account or create a new one</p>
            </div>

            <div className="login-tabs">
                <div className="login-tab active" id="login-tab">Login</div>
                <div className="login-tab" id="register-tab">Register</div>
            </div>

            
            <form className="login-form active" id="login-form">
                <div className="form-group">
                    <label >Email or Mobile Number</label>
                    <input type="text" id="login-identifier" placeholder="Enter your email or mobile number" required/>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" id="login-password" placeholder="Enter your password" required/>
                </div>
                <button type="submit" className="login-btn-submit" id="login-submit-btn">Sign In</button>
                <div className="switch-form">
                    Don't have an account? <a href="#" id="switch-to-register">Create one</a>
                </div>
            </form>
            </div>
            </div>
            </>
    )
}

export default Login