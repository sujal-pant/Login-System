import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", { email, password });

      if (response.data.success) {
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <div className="flex h-full w-full max-w-screen-xl bg-gray-100 p-0">
         
          <div className="hidden md:flex md:w-6/12 xl:w-6/12 flex-shrink-0">
            <img
              src="src/assets/Online_Registration_Illustration_vector_concept_generated.jpg"
              className="w-full h-full object-cover" // Ensure full width and height
              alt="Sample image"
            />
          </div>

          {/* Right column container */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-[500px] p-12 bg-white rounded-3xl shadow-2xl">
              <form onSubmit={handleLogin}>
                {/* Separator between social media sign in and email/password sign in */}
                <div className="my-4 text-black flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  Enter Your Credentials
                </div>

                {/* Email input */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-4 py-3 text-black placeholder-gray-500 focus:border-primary focus:outline-none"
                    id="exampleFormControlInput2"
                  
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="exampleFormControlInput2"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                  >
                    Email address
                  </label>
                </div>

                {/* Password input */}
                <div className="relative mb-6">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-4 py-3 text-black placeholder-gray-500 focus:border-primary focus:outline-none"
                    id="exampleFormControlInput22"
                    
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="exampleFormControlInput22"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                  >
                    Password
                  </label>
                </div>

                <div className="mb-6 flex items-center justify-between">
                  <Link to="/reset">Forgot password?</Link>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-7 pb-3 pt-4 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
                  >
                    Login
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Don't have an account?
                    <Link
                      to="/signup"
                      className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Register
                    </Link>
                  </p>
                  <br />
                  <p>
                    <Link
                      to="/register"
                      className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                    >
                      See the Registered Users
                    </Link>
                  </p>
                </div>
              </form>
              {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavbarLogin;
