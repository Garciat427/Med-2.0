//Navbar React Stateless Component

//Import Dependencies
import React from "react";

function Navbar() {
    return (
        <header>
            {/* <nav>
                <div class="nav-wrapper deep-purple lighten-1">
                    <a href="/" class="brand-logo center">Logo</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav> */}


            <nav>
                <div class="nav-wrapper deep-purple lighten-1">
                    <a href="#!" class="brand-logo center" ><i class="large material-icons left">healing</i>MED 2.0</a>
                    <ul class="right">
                        <li><a href="badges.html"><i class="material-icons left">view_module</i>Presentation</a></li>
                        <li><a href="badges.html"><i class="material-icons left">touch_app</i>Login</a></li>


                        
                    </ul>
                </div>
            </nav>




        </header>
    );
}

export default Navbar;