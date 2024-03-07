import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { removeDuplicateNumbers } from "./utils/removeDuplicateNumbers";
import Loader from "./utils/Loader";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  console.log(searchParams);
  const [filterData, setFilteredData] = useState([]);
  const containerStyle = {
    height: "80vh",
    overflowY: "auto",
  };
  const handleLogout = () => {
    navigate("/");
  };

  const getAppData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`);
      const uniqueData = removeDuplicateNumbers(res.data);
      const sortedData = res.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setData(uniqueData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const lowerCaseSearchParams = searchParams.toLowerCase();
    const filteredData = data.filter((el) =>
      el.number.toLowerCase().includes(lowerCaseSearchParams)
    );
    console.log(filteredData);
    setFilteredData(filteredData);
  };

  const handleShow = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    getAppData();
  }, []);

  return (
    <div className="App">
      <div className="flex flex-col md:flex-row h-screen bg-gray-100">
        <div className="w-full md:w-80 bg-white shadow">
          <div className="flex items-center justify-evenly px-2 py-4 gap-5">
            <LuLayoutDashboard
              className="cursor-pointer"
              onClick={handleShow}
              size={35}
            />
            <h1 className="text-xl font-bold">Dashboard</h1>
            <p
              className="border px-2 rounded cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </p>
          </div>

          {show && (
            <div
              className="fixed top-0 left-0 right-0 bottom-0  backdrop-blur-sm"
              onClick={handleClose}
            ></div>
          )}

          <div
            className={`p-4 flex flex-col gap-2 md:h-full h-96 md:static absolute bg-white left-0 right-0  ${
              show ? "top-0" : "-top-full"
            }`}
          >
            <div className="block md:hidden">
              <NavLink
                onClick={handleClose}
                className={"bg-transparent flex justify-center "}
              >
                <IoMdCloseCircle size={40} color="black" />
              </NavLink>
            </div>

            <NavLink
              onClick={handleClose}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "flex items-center space-x-4 p-2 rounded-md w-full hover:bg-gray-200 bg-gray-200 hover:shadow font-semi-bold cursor-pointer"
                  : "flex items-center space-x-4 p-2 rounded-md w-full hover:bg-gray-200 hover:shadow font-semi-bold cursor-pointer"
              }
              to={"/dashboard/webpage"}
            >
              <button>Web Data</button>
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
