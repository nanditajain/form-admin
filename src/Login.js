import "./App.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const SubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (
        formData.email === "admin@gmail.com" &&
        formData.password === "admin"
      ) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div>{/* <Toaster /> */}</div>
        <div className="max-w-md w-full space-y-8">
          {/* Logo */}
          <div className="center_m">
            <lord-icon
              className="mt-6 text-center text-3xl font-extrabold text-gray-900"
              src="https://cdn.lordicon.com/hbvyhtse.json"
              trigger="hover"
              colors="primary:#121331"
              style={{ width: "120px", height: "120px" }}
            ></lord-icon>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your dashboard
            </h2>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n          .center_m {\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: center;\n          }\n        ",
            }}
          />
          {/* Login form */}
          <form className="mt-8 space-y-6" onSubmit={SubmitForm}>
            {/* Email input */}
            <div className="rounded-md shadow-sm">
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            {/* Password input */}
            <div className="mt-4">
              <div className="rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
            </div>
            {/* Sign in button */}
            <div className="mt-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M9.57658 7.70419C10.2099 6.56806 10.5266 6 11 6C11.4734 6 11.7901 6.56806 12.4234 7.70419L12.5873 7.99812C12.7672 8.32097 12.8572 8.48239 12.9975 8.5889C13.1378 8.69541 13.3126 8.73495 13.6621 8.81402L13.9802 8.88601C15.2101 9.16428 15.825 9.30341 15.9713 9.77387C16.1176 10.2443 15.6984 10.7345 14.86 11.715L14.643 11.9686C14.4048 12.2472 14.2857 12.3865 14.2321 12.5589C14.1785 12.7312 14.1965 12.9171 14.2325 13.2888L14.2653 13.6272C14.3921 14.9353 14.4554 15.5894 14.0724 15.8801C13.6894 16.1709 13.1137 15.9058 11.9622 15.3756L11.6643 15.2384C11.337 15.0878 11.1734 15.0124 11 15.0124C10.8266 15.0124 10.663 15.0878 10.3357 15.2384L10.0378 15.3756C8.88634 15.9058 8.31059 16.1709 7.92757 15.8801C7.54456 15.5894 7.60794 14.9353 7.7347 13.6272L7.76749 13.2888C7.80351 12.9171 7.82152 12.7312 7.76793 12.5589C7.71434 12.3865 7.59521 12.2472 7.35696 11.9686L7.14005 11.715C6.30162 10.7345 5.88241 10.2443 6.02871 9.77387C6.17501 9.30341 6.78993 9.16428 8.01977 8.88601L8.33794 8.81402C8.68743 8.73495 8.86217 8.69541 9.00247 8.5889C9.14278 8.48239 9.23276 8.32097 9.41273 7.99812L9.57658 7.70419Z"
                      fill="#fff"
                    />
                    <path
                      opacity="0.8"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 0.25C11.4142 0.25 11.75 0.585786 11.75 1V3C11.75 3.41421 11.4142 3.75 11 3.75C10.5858 3.75 10.25 3.41421 10.25 3V1C10.25 0.585786 10.5858 0.25 11 0.25ZM0.25 11C0.25 10.5858 0.585786 10.25 1 10.25H3C3.41421 10.25 3.75 10.5858 3.75 11C3.75 11.4142 3.41421 11.75 3 11.75H1C0.585786 11.75 0.25 11.4142 0.25 11ZM18.25 11C18.25 10.5858 18.5858 10.25 19 10.25H21C21.4142 10.25 21.75 10.5858 21.75 11C21.75 11.4142 21.4142 11.75 21 11.75H19C18.5858 11.75 18.25 11.4142 18.25 11ZM11 18.25C11.4142 18.25 11.75 18.5858 11.75 19V21C11.75 21.4142 11.4142 21.75 11 21.75C10.5858 21.75 10.25 21.4142 10.25 21V19C10.25 18.5858 10.5858 18.25 11 18.25Z"
                      fill="#fff"
                    />
                    <g opacity="0.5">
                      <path
                        d="M17.5304 4.46967C17.8233 4.76256 17.8233 5.23744 17.5304 5.53033L17.1872 5.87359C16.8943 6.16648 16.4194 6.16648 16.1265 5.87359C15.8336 5.5807 15.8336 5.10583 16.1265 4.81293L16.4698 4.46967C16.7627 4.17678 17.2376 4.17678 17.5304 4.46967Z"
                        fill="#fff"
                      />
                      <path
                        d="M4.46967 4.46979C4.76256 4.17689 5.23744 4.17689 5.53033 4.46979L5.87359 4.81305C6.16648 5.10594 6.16648 5.58081 5.87359 5.87371C5.5807 6.1666 5.10583 6.1666 4.81293 5.87371L4.46967 5.53045C4.17678 5.23755 4.17678 4.76268 4.46967 4.46979Z"
                        fill="#fff"
                      />
                      <path
                        d="M5.87348 16.1266C6.16637 16.4195 6.16637 16.8944 5.87348 17.1873L5.53043 17.5303C5.23754 17.8232 4.76266 17.8232 4.46977 17.5303C4.17688 17.2375 4.17688 16.7626 4.46977 16.4697L4.81282 16.1266C5.10571 15.8337 5.58058 15.8337 5.87348 16.1266Z"
                        fill="#fff"
                      />
                      <path
                        d="M16.1265 16.1269C16.4194 15.834 16.8943 15.834 17.1872 16.1269L17.5302 16.4699C17.8231 16.7628 17.8231 17.2377 17.5302 17.5306C17.2373 17.8235 16.7624 17.8235 16.4695 17.5306L16.1265 17.1875C15.8336 16.8946 15.8336 16.4198 16.1265 16.1269Z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
