import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto mt-4">
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;