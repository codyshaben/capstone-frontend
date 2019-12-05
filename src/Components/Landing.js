import React , { Component } from  'react'
import './Landing.css'
// import SignIn from './SignIn'

class Landing extends Component {

    state = {
        isSignInShowing: true,
        isSignUpShowing: false,
        email: null,
        password: null
    }

    componentDidMount(){
        this.userSignup()
        this.userLogin()
    }

    async saveItem(item, selectedValue) {
        try {
          await window.localStorage.setItem(item, selectedValue);
        } catch (error) {
          console.error('Session Storage error: ' + error.message);
        }
    }

    async getItem(item, selectedValue) {
        try {
          await window.localStorage.getItem(item, selectedValue);
        } catch (error) {
          console.error('Session Storage error: ' + error.message);
        }
    }

    userSignup = () => {
        const signupUrl = 'https://young-fortress-18955.herokuapp.com/auth/signup'
        if(!this.state.email || !this.state.password) return 
        fetch(signupUrl, {
            method: 'POST',
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 
                'application/json' 
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
         console.log(responseData);

        this.saveItem('id_token', responseData.token).alert( 'Succesfully created account!')
        // Actions.HomePage();
        })
        .done();
    }

    toggleSignInShowing = () => {
        this.setState({
          isSignInShowing: !this.state.isSignInShowing,
          isSignUpShowing: true
        })
    }

    userLogin() {
        const loginUrl = 'https://young-fortress-18955.herokuapp.com/auth/login'
        if (!this.state.email || !this.state.password) return;
        fetch(loginUrl, {
          method: 'POST',
          headers: { 
              'Accept': 
              'application/json', 
              'Content-Type': 'application/json' 
        },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
          })
        })
        .then((response) => response.json())
        .then((responseData) => {
          this.getItem('id_token', responseData.token).alert('Login Success!')
        .then(this.toggleSignInShowing)
        })
        .done();
      }

  
      
    
    render(){
        return(
            
            <div className="landing">
                <h1>PowderPal</h1>
                {
                    this.state.isSignInShowing
                        ? <form id="signin_form" >
                        <input className="username-input" type="text" name="username" placeholder="Email" />
                        <input className="password-input"type="password" name="password" placeholder="Password" />
                        <button id="sign-in"type="submit" onClick={this.props.toggleIsLandingShowing}>Sign In</button>
                        <p id="sign-up-suggestion">Don't have an account?</p>
                        <button id="show-signup" >Sign Up</button>
                    </form>
                    : null
                }
                {
                    this.state.isSignUpShowing
                    ? <form id="signup_form" >
                        <input className="username-input" type="text" name="username" placeholder="Email" />
                        <input className="password-input"type="password" name="password" placeholder="Password" />
                        <button id="sign-in"type="submit" onClick={this.userSignup.bind(this)}>Sign Up</button>
                    </form>
                    : null
                }
            </div>
        )
    }
 
        

}

export default Landing