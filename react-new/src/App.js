import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import useFetch from "./useFetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [data] = useFetch("https://dummyjson.com/products");

  // const [name, setname] = useState("");
  // const [data, setdata] = useState([]);
  // const [email, setemail] = useState("");
  // const [form, setfrom] = useState({});
  // const handlesubmit = () => {
  //   setdata([...data, { name, email, id: Math.ceil(Math.random()) }]);
  // };
  // console.log(data);
  // const deldata = (id) => {
  //   let arr = data;
  //   arr.splice(id, 1);
  //   setdata([...arr]);
  // };
  // console.log(data.products.map((res)=> res));
  return (
    <>
      <h1>Hello</h1>

      {/* <div>
        {data.products.map((res) => {
          return <h1>{res.title}</h1>;
        })}
      </div> */}
    </>
  );
}

export default App;

// return (
//   <>
//     <div className="App">
//       <h1>Project</h1>{" "}
//     </div>
//     {/*
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<h1>Home</h1>}></Route>
//       </Routes>
//     </BrowserRouter> */}

//     <Nav />
//     {/* <div>
//       <input
//         onChange={(e) => setname(e.target.value)}
//         type="text"
//         value={name}
//       />
//       <input
//         onChange={(e) => setemail(e.target.value)}
//         type="text"
//         value={email}
//       />
//       <button onClick={handlesubmit}>Add</button>
//     </div> */}

//     {/* <div>
//       {data.map((datas) => {
//         return (
//           <div>
//             <p>{datas.name}</p>
//             <p>{datas.email}</p>
//             <button onClick={() => deldata(datas.id)}>Delete</button>
//           </div>
//         );
//       })}
//     </div> */}
//   </>
// );
