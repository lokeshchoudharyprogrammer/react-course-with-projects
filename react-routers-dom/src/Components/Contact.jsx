import React from "react";
// import { useSearchParams } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";
import { Link, Outlet, useSearchParams } from "react-router-dom";
const Contact = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [name, setname] = React.useState("");
  function handleSubmit(event) {
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    setname(event.target.value);
  }
  const syb = () => {
    setSearchParams({ "data": name });
  };
  console.log(searchParams.get("data"));
  return (
    <>
      <div>Contact</div>
      <Link to="insta">
        <h1>Insta With Contact</h1>
      </Link>
      <Link to="mail">
        <h1>Mail With Contact</h1>
      </Link>
      <Outlet />
      <div>
        <input type="text" onClick={handleSubmit} />
        <button onClick={syb}>add</button>
      </div>
    </>
  );
};

export default Contact;
