import React from "react";
import "./WelcomeScreen.css";

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
        (
            <div className="WelcomeScreen">
                <h1 className="welcome-slogan">Welcome to the <span className="app-title">Meet</span> app</h1>
                <h4 className="welcome-instruction">
                    - Log in to see upcoming events around the world for full-stack
                    developers -
                </h4>
                <div className="button_cont" align="center">
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="Google sign-in" />
                        </div>
                        <button onClick={() => { props.getAccessToken() }}
                            rel="nofollow noopener"
                            className="btn-sign-in" >
                            <b>Sign in with google</b>
                        </button>
                    </div>
                </div>
                <a className="privacy-policy" href="https://halatinn97.github.io/meet/privacy.html" rel="nofollow noopener" >
                    Privacy policy
                </a>
            </div>)
        : null
}
export default WelcomeScreen;