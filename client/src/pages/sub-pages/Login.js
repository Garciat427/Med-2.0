import React, { Component } from "react";

//Route Dependencies
import Auth from "../../utils/Auth"

class Login extends Component {
   
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col s12">
                  <h3 className="center">Login</h3>

               </div>
            </div>

            <div className="row">
               <div className="col s12 m6">
                  <div className="card grey lighten-2">
                     <div className="card-content Black-text">
                        <p>
                           <a href="http://localhost:3001/auth/google" class="waves-effect waves-light btn">Signin With google</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      )
   }

}

export default Login;