import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

const LayoutLanding = (props) => {
  return (
    <>
      <div className="container mx-auto w-11/12">
        <NavigationBar />
        <div>{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default LayoutLanding;
