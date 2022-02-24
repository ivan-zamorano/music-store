<<<<<<< HEAD
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
=======
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    const {children} = props
    return (
        <>
            <Header></Header>
            {children}
            {/* <Footer></Footer> */}
        </>
    )
}

export default Layout
>>>>>>> ad91d0c8a26ac6334a1fac5caff17ec11a96f7a3
