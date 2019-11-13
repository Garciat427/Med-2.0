//Navbar React Stateless Component

//Import Dependencies
import React from "react";

function Navbar() {
    return (
        <header>
            <nav>
                <div class="nav-wrapper">
                    <a href="/" class="brand-logo center">Logo</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;