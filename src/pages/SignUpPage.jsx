import React, { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../api/axios";
function SignUpPage() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await instance.post('/auth/signup', formData);
            console.log(res.data);

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-amber-100 to-amber-50">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                {/* Title */}
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
                    Create an Account ✨
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullname"
                            placeholder="Enter your full name"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            name="confirmPassword"
                            value={formData.confirmPassword}

                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-center text-sm text-gray-600">
                        <input type="checkbox" className="mr-2 rounded border-gray-300" />
                        I agree to the <span className="text-blue-500 hover:underline cursor-pointer">Terms & Conditions</span>
                    </div>

                    {/* Signup button */}
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login">
                        <span className="text-blue-500 cursor-pointer hover:underline">
                            Login
                        </span>
                    </Link>
                </p>
            </div>
        </div>

    );
}

export default SignUpPage;
