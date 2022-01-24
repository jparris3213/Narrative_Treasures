import React from "react";
import Auth from "../utils/auth"

function Footer() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }
  return (
    <footer className="footer mt-auto" style={{height: "60px"}}>
      <div className="container text-center">
        <span className="mt-5 mb-3 text-light">
          <img
            className="bg-light rounded-circle"
            src="/icons/dragon-png-20.png"
            alt="Logout"
            width="40"
            height="40"
            onClick={logout}
          />
          <p >2021©2022</p>

          
        </span>
        

      </div>
    </footer>
  );
}

export default Footer;
