// import React from "react";
// import { IoMail } from "react-icons/io5";
// import { IoIosLock } from "react-icons/io";
// import { Link } from "react-router-dom";

// export default function Login() {
//   return (
//     <div className="relative flex flex-col justify-center items-center min-h-screen">
//       <div className="relative ">
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-[#3EB1E1] rounded-full blur-3xl opacity-45 z-0"></div>
//         <div className="relative z-10">
//           <div className="bg-gradient-to-t from-[#09212B99] to-[#1D6F9199] text-[#DCECF2] flex flex-col justify-center items-center md:max-w-2xl h-[450px] gap-5 rounded-xl px-14 m-4">
//             <h2 className="text-4xl text-center mb-8 font-semibold tracking-wide">
//               Welcome Back
//             </h2>
//             <div className="bg-[#D9D9D9] flex flex-row items-center gap-2 px-2 py-1 rounded-md w-full">
//               <IoMail className="text-[#5B5B5B] text-2xl" />
//               <input
//                 className="bg-[#D9D9D9] outline-none text-[#5B5B5B] w-full p-1"
//                 type="text"
//                 placeholder="Email"
//               />
//             </div>
//             <div className="bg-[#D9D9D9] flex flex-row items-center gap-2 px-2 py-1 rounded-md w-full">
//               <IoIosLock className="text-[#5B5B5B] text-2xl" />
//               <input
//                 className="bg-[#D9D9D9] outline-none text-[#5B5B5B] w-full p-1"
//                 type="text"
//                 placeholder="Password"
//               />
//             </div>
//             <button className="bg-gradient-to-r from-[#1D6F91] to-[#3EB1E1] px-4 py-1 rounded-md">
//               Login
//             </button>
//             <p className=" tracking-wide text-center">
//               <span className="italic text-xs text-[#D9D9D9] hover:text-[#878787]">
//                 Don't have an account ?
//               </span>
//               <Link to={"/signup"} className="text-[#3EB1E1] cursor-pointer">
//                 {" "}
//                 Signup
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { IoMail } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state

    try {
      const response = await axios.post("http://localhost:5000/api/v1/auth/login", {
        email,
        password,
      });

      // Handle successful login (e.g., redirect to dashboard)
      if (response.data.token) {
        // Store token if needed (localStorage, Redux, context, etc.)
        // localStorage.setItem('token', response.data.token);
        navigate("/dashboard"); // Redirect to a protected route
      }
    } catch (err) {
      setError(err.response?.data.message || "Login failed");
      console.error(err);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen">
      <div className="relative ">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-[#3EB1E1] rounded-full blur-3xl opacity-55 z-0"></div>
        <div className="relative z-10">
          <div className="bg-gradient-to-t from-[#09212B99] to-[#1D6F9199] text-[#DCECF2] flex flex-col justify-center items-center md:max-w-2xl h-[450px] gap-5 rounded-xl px-14 m-4">
            <h2 className="text-center text-4xl mb-8 font-semibold tracking-wide">
              Welcome Back
            </h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
              <div className="bg-[#D9D9D9] flex flex-row items-center gap-2 px-2 py-1 rounded-md w-full">
                <IoMail className="text-[#5B5B5B] text-2xl" />
                <input
                  className="bg-[#D9D9D9] outline-none text-[#5B5B5B] w-full p-1"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="bg-[#D9D9D9] flex flex-row items-center gap-2 px-2 py-1 rounded-md w-full">
                <IoIosLock className="text-[#5B5B5B] text-2xl" />
                <input
                  className="bg-[#D9D9D9] outline-none text-[#5B5B5B] w-full p-1"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className="bg-gradient-to-r from-[#1D6F91] to-[#3EB1E1] px-4 py-1 rounded-md">
                Login
              </button>
            </form>
            <p className=" tracking-wide text-center">
              <span className="italic text-xs text-[#D9D9D9] hover:text-[#878787]">
                Don't have an account?
              </span>
              <Link to={"/signup"} className="text-[#3EB1E1] cursor-pointer">
                {" "}Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
