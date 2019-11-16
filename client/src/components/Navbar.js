//Navbar React Stateless Component

//Import Dependencies
import React from "react";

function Navbar() {
    return (
        <header>
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