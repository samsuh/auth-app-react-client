import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default ({ children }) => {
  return (
    <div id='app-body'>
      <header className='transparent'>
        <Header />
      </header>
      <main>{children}</main>
      <footer className='blue darken-4'>
        <Footer />
      </footer>
    </div>
  );
};
