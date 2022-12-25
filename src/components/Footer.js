import React from "react";
import logo from './img/logo/flag-400.png';



const Footer = () => {
    return (
       <div className="ui footer">
        <div className="footer-col footer-col-1">
            <div className="col-one-container">
            <div className="footer_logo">
                <a className="foo-i item logo">
                    Interns &nbsp;
                <div className="foo-logo_img"><img src={logo}/></div>
                </a>
            </div>
            <div className="foo_desc">
                <p>Enabling Individuals to live meaningful Lives</p>
            </div>
        </div>
        </div>
        <div className="footer-col footer-col-2">
            <ul>
                <li><a href="#">Programs</a></li>
                <li><a href="#">Schedules</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Interns Lab</a></li>
                <li><a href="#">Wall of Love</a></li>
            </ul>
        </div>
        <div className="footer-col footer-col-3">
        <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Work With Us</a></li>
                <li><a href="#">Hire Internee</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div className="footer-col footer-col-4">
        <ul>
                <li><a href="#"><i class="facebook icon"></i></a></li>
                <li><a href="#"><i class="youtube icon"></i></a></li>
                <li><a href="#"><i class="instagram icon"></i></a></li>
                <li><a href="#"><i class="linkedin icon"></i></a></li>
            </ul>
        </div>
       </div>
    )
}

export default Footer