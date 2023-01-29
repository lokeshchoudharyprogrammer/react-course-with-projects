import React from "react";
// https://dummyjson.com/products

const useFetch = (url) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const call = await fetch(url);
      const res = await call.json();
      setData(res);
    }

    getData();
  }, []);

  return [data];
};

export default useFetch;
