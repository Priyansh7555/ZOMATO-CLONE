import React from "react";
import { useLocation } from "react-router-dom";
import '../Style/Header.css';

export default function Header() {
    const location = useLocation();
          const path = location.pathname;
          let bg;
            // let path='';
            if (path === '/') {
                bg = 'black';
            }
            else {
                bg = 'red';
            }

    return (
        <div>
        <div className="header" style={ {backgroundColor : bg}}>
        <div className="maincontents">
            {/* <div className="header-logo"> */}
                <img src="./Assets/Zomato.png" height="55px" width="60px" className="header-logo"/>
                {/* </div> */}

            <div className="user-account">
                <button className="login">Login</button>
                <button className="sigup">Create an account</button>
            </div>
            </div>
        </div>
        </div>

    );
}


//export default Header;



