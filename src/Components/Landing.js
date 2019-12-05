import React from  'react'
import './Landing.css'

const Landing = (props) => {

        return(
            <header className="landing">
                <h1>PowderPal</h1>
                <form id="signin_form" >
                    <input id="username-input" type="text" name="username" placeholder="Username" />
                    <input id="password-input"type="text" name="password" placeholder="Password" />
                    <button id="sign-in"type="submit">Sign In</button>
                    <p id="sign-up-suggestion">Don't have an account?</p>
                    <button id="show-signup">Sign Up</button>
                </form>
            </header>
        )

}

export default Landing