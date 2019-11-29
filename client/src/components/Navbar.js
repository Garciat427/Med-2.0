//Navbar React Stateless Component

//Import Dependencies
import React from "react";

function Navbar() {
   return (
      <nav>
         <div className="nav-wrapper deep-purple lighten-1">
            <a href="/" className="brand-logo center" ><i className="large material-icons left headerLogo">healing</i>MED 2.0</a>
            <ul className="right">
               <li><a href="badges.html"><i className="material-icons left">view_module</i>Presentation</a></li>
               <li><a href="/login"><i className="material-icons left">touch_app</i>Login</a></li>
            </ul>
         </div>
      </nav>
   );
}

export default Navbar;