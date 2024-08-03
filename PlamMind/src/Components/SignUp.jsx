import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const newData = { ...data, id: uuidv4() };
      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      toast("Account Created Successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      reset();
      setTimeout(() => {
        navigate("/login", { state: { newUser: newData } });
      }, 1000);
    } catch (error) {
      toast.error("Failed", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: "bounce",
      });
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <div className="flex h-full w-full max-w-screen-xl bg-gray-100 p-0">
          {/* Left column container with background */}
          <div className="hidden md:flex md:w-6/12 xl:w-6/12 flex-shrink-0">
            <img
              src="src/assets/Mobile login-pana.svg"
              className="w-full h-full object-cover"
              alt="Sample image"
            />
          </div>

          {/* Right column container */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-[500px] p-12 bg-white rounded-3xl shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-4 text-black flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                  Sign Up
                </div>

                {/* Name input */}
                <div className="relative mb-6">
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className="text-black peer block min-h-[auto] w-full rounded border-0 bg-transparent px-4 py-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="name"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400 dark:peer-focus:text-primary"
                  >
                    Name
                  </label>
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </div>

                {/* Email input */}
                <div className="relative mb-6">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="text"
                    className="text-black peer block min-h-[auto] w-full rounded border-0 bg-transparent px-4 py-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="email"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400 dark:peer-focus:text-primary"
                  >
                    Email address
                  </label>
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>

                {/* Password input */}
                <div className="relative mb-6">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                    type="password"
                    className="text-black peer block min-h-[auto] w-full rounded border-0 bg-transparent px-4 py-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="password"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400 dark:peer-focus:text-primary"
                  >
                    Password
                  </label>
                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                {/* City input */}
                <div className="relative mb-6">
                  <input
                    {...register("city", { required: "City is required" })}
                    type="text"
                    className="text-black peer block min-h-[auto] w-full rounded border-0 bg-transparent px-4 py-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                    id="city"
                    placeholder="City"
                  />
                  <label
                    htmlFor="city"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400 dark:peer-focus:text-primary"
                  >
                    City
                  </label>
                  {errors.city && (
                    <span className="text-red-500">{errors.city.message}</span>
                  )}
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-7 pb-3 pt-4 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Sign Up
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Already have an account?
                    <Link
                      to="/login"
                      className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
