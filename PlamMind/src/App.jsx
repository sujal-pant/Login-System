import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                "Your Gateway to Secure User Management"
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                "Efficiently manage user registrations, logins, and security
                with ease. UserHub is your all-in-one solution for streamlined
                user data management and secure access control."
              </p>
              <a className="btn btn-primary btn-xl" href="#about">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">We've got what you need!</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                UserHub offers a comprehensive suite of tools to manage your
                users effortlessly. From secure user registration to seamless
                login and password reset processes, we ensure that your user
                data is protected and easily accessible. Our intuitive interface
                and robust backend make it simple to keep track of all your user
                interactions, providing you with the peace of mind that your
                app's security and user experience are in good hands.
              </p>
              <Link className="btn btn-light btn-xl" to ="/login">
                Get Started!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
