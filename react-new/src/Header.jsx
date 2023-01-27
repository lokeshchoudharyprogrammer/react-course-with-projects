import React from "react";
import Footer from "./Footer";
import propTypes from "prop-types";

const Header = (props) => {
  return (
    <>
      <div>Header</div>
      <h1>{props.name}</h1>
      <h1>{props.number}</h1>
    </>
  );
};

export default Header;

Header.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.number,
};
Header.defaultProps={
  name:"Lokesh",
  number:0
}
