import React, { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../api/axios.js"

function LoginPage() {
    const [rememberMe,setRememberme] = useState(false);

    const [formData,setFormData] = useState({
        email : "",
        password : "",
    })
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
            
        })

    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await instance.post("/auth/login",{
                ...formData,
                rememberMe

            });
            if (rememberMe) {
                localStorage.setItem("token",res.data.token);
            }
            else{
                sessionStorage.setItem("token",res.data.token);
            }
            console.log(res.data);
            
            
            console.log(`Login Success : `,res.data);
            
        }
        catch (e){
            console.log(`Login Failed : ${e}`);
            
        }
    }
  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-amber-100 to-amber-50">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
    {/* Title */}
    <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
      Welcome Back 👋
    </h2>

    {/* Inputs */}
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          name = "password"
          value = {formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded border-gray-300" onChange={()=>{setRememberme(!rememberMe)}}/>
          Remember me
        </label>
        <span className="text-blue-500 cursor-pointer hover:underline">
          Forgot Password?
        </span>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>
    </form>

    {/* Divider */}
    <div className="my-6 flex items-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="px-3 text-gray-500 text-sm">or</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>

    {/* Footer */}
    <p className="text-sm text-center text-gray-600">
      Don’t have an account?{" "}
      <Link to='/signup'>
      <span className="text-blue-500 cursor-pointer hover:underline">
        Sign Up
      </span></Link>
      
    </p>
  </div>
</div>

  );
}

export default LoginPage;
