import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import M from "materialize-css";

export default ({ children }) => {
  return (
    <div className='container' id='app-body'>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
