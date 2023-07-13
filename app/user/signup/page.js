"use client";

import React, { useEffect, useState } from "react";

function SignIn() {
  const [username, setusername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passError, setPassError] = useState(false);

  useEffect(() => {
    validatePassword(password, confirmPassword);
  }, [password, confirmPassword]);

  function validatePassword(pass, confirmPass) {
    let isValid = true;
    if (!isValid) {
      setPassError(true);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let userData = {
      username,
      email,
      password,
    };

    console.log(userData);
    // Make call to backend to create user
    const res = await fetch("/api/user/create", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();

      // registration success
    } else {
      //registration faled
    }
  }
  return (
      <div className="flex justify-center items-center m-auto p-3">
        <form
          onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name"  >
              Username
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="name" type="text" laceholder="name" 
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="email"  >
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}  id="email" type="email" placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password" >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} id="password" type="password"  placeholder="***********"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password"   >
              Confirm Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} id="confirm-password"  type="password" placeholder="***********"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            {passError && (
              <p className="text-red-500 text-xs italic">
                Password do not match!
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2  px-4 rounded  focus:outline-none  focus:shadow-outline" onSubmit={handleSubmit} >
              Sign Up
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#" >
              Have an account? Sign in
            </a>
          </div>
        </form>
      </div>
  );
}

export default SignIn;