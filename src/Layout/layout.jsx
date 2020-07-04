import React from "react";
import Footer from "../Components/myComponent/Footer";
import Header from "../Components/myComponent/Header";

const Layout = (props) => {
  const [value, setValue] = React.useState(0);
  const [indexSelected, setSelectedIndex] = React.useState(0);

  return (
    <>
      <Header
        value={value}
        setValue={setValue}
        indexSelected={indexSelected}
        setSelectedIndex={setSelectedIndex}
      />
      {props.children}
      <Footer
        value={value}
        setValue={setValue}
        indexSelected={indexSelected}
        setSelectedIndex={setSelectedIndex}
      />
    </>
  );
};

export default Layout;
