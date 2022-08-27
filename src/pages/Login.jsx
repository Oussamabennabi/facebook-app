import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserCard, LoginForm } from "../features/authentication/index";
import { Footer } from "../layouts";

import { Navigate } from "react-router";
import FaceboolLoginIcon from "../assets/facebook-login.svg";
import { getUserAuth } from "../features/authentication/services/userAPI";
const Login = () => {
  const dispatch = useDispatch();
  const { isSignedIn } = useSelector((s) => s.user);


  
  useEffect(() => {
    dispatch(getUserAuth());
  }, [dispatch,isSignedIn]);

  if (isSignedIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      <div className="  bg-slate-100  flex justify-center items-center p-4 lg:p-8">
        <div className="container h-full max-w-6xl mb-16 lg:mt-14  mx-auto flex gap-7  justify-between items-center lg:items-baseline flex-col lg:flex-row">
          <div className="flex flex-col gap-8 ">
            <div className="text-center lg:text-left">
              <img
                className="w-48  lg:-ml-5 mx-auto"
                src={FaceboolLoginIcon}
                alt="facebook"
              />
              <h1 className="text-2xl pb-1">Recent Logins</h1>
              <p className="text-gray-600 text-sm">
                Click your picture or add an account.
              </p>
            </div>
            <div className="flex gap-6  justify-center  flex-wrap">
              {isSignedIn && <UserCard isAddAccount={false} />}
              <UserCard isAddAccount={true} />
            </div>
          </div>
          {/* Login form */}
          <div>
            <LoginForm />
            <p className="text-sm text-center py-7">
              <a href="" className="font-bold ">
                Create a Page
              </a>{" "}
              for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
