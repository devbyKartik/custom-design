import React from 'react';
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer"
import "../assets/scss/container.scss"
function Layout() {
  return (
      <div className="container">
         <Header />
           <div className="wrapper">hello in container</div>
        <Footer />
      </div>
   
  );
}

export default Layout;
