import React from "react";
import { Footer } from "flowbite-react";

const FooterComponent = () => {
  return (
    <>
      <footer
        data-testid="flowbite-footer"
        className="w-full rounded-lg bg-white dark:bg-gray-800 md:flex md:items-center md:justify-between w-full p-6 w-11/12 mx-auto mt-6 border-t-2 "
      >
        <Footer.Copyright
          href="https://www.linkedin.com/in/yohannams"
          by="Yohanna Marsella Santoso"
          year={2023}
        />
      </footer>
    </>
  );
};

export default FooterComponent;
