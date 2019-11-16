// Notes Below:
// Team! this is component uses Materialize <- Thanks for letting me know! :D Troy

//Import Dependencies
import React from "react";

function Footer() {


   return (
      <div className="page-footer deep-purple lighten-1">
         <div className="container">
            <div className="row">
               <div className="col l6 s12">
                  <h5 className="white-text">The Med 2.0 Project</h5>
                  <a href="https://github.com/Garciat427/Med-2.0">
                     <p className="grey-text text-lighten-4 valign-wrapper buttonLink">
                        <i className="link-Footer fab fa-github"></i> Visit the Project Git repository here
                     </p>
                  </a>
                  <a href="https://sustainabledevelopment.un.org/sdgs">
                     <p className="grey-text text-lighten-4 valign-wrapper">
                        This project was inspired by the Sustainable Developmental Goals provided by the UN
                     </p>
                     <p className="grey-text text-lighten-4 valign-wrapper buttonLink">
                        <i class="link-Footer fas fa-flag"></i> Click here to learn more
                     </p>
                  </a>
               </div>
               <div className="col l4 offset-l2 s12">
                  <ul> 
                     <h6 className="white-text">Team Links</h6>
                     <li className="footerLink"><a className="valign-wrapper grey-text text-lighten-3 buttonLink" href="https://github.com/arif2301"><i className="link-Footer fab fa-github"></i>Arifur Rahman</a></li>

                     <li className="footerLink"><a className="valign-wrapper grey-text text-lighten-3 buttonLink" href="https://github.com/lcocard"><i className="link-Footer fab fa-github"></i> Lawrence Cocard</a></li>

                     <li className="footerLink"><a className="valign-wrapper grey-text text-lighten-3 buttonLink" href="https://github.com/majedline"><i className="link-Footer fab fa-github"></i> Majed Atwi</a></li>
                     
                     <li className="footerLink"><a className="valign-wrapper grey-text text-lighten-3 buttonLink" href="https://github.com/Garciat427"><i className="link-Footer fab fa-github"></i> Troy Garcia</a></li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="footer-copyright">
            <div class="container">
               © 2019 Copyright Med 2.0
            <a class="grey-text text-lighten-4 right buttonLink" href="https://materializecss.com/">This site was developed using the Materalize Framework</a>
            </div>
         </div>
      </div>
   );
}

export default Footer;
