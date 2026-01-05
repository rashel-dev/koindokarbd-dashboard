import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSignIn = (data) => {
        signInUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                toast.success("Login successful!");
                navigate("/dashboard");
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-primary via-[#7b76f1] to-[#b158ff]">
            {/* Container Card */}
            <div className="bg-white px-12 py-12 shadow-2xl w-full max-w-120">
                {/* Header Section */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2 tracking-tight">Welcome back</h1>
                    <p className="text-gray-500 text-[15px]">Please login to your account</p>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit(handleSignIn)} className="space-y-3">
                    <div>
                        <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2">Email*</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Enter email"
                            className="w-full px-4 py-2.5 border border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-primary"
                        />
                        {errors.email && <p className="text-red-500">This field is required</p>}
                    </div>

                    <div>
                        <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2">Password*</label>
                        <input
                            type="password"
                            {...register("password", { required: true })}
                            placeholder="Enter password"
                            className="w-full px-4 py-2.5 border border-gray-200 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-primary"
                        />
                        {errors.password && <p className="text-red-500">This field is required</p>}
                    </div>

                    {/* Checkbox Section */}
                    <label className="flex items-center pt-2 cursor-pointer">
                        <input type="checkbox" className="checkbox mr-2 rounded-none checked:bg-gray-300" />
                        <span className="text-gray-500 text-[15px]">Remember me</span>
                    </label>

                    {/* Action Button */}
                    <div className="pt-4">
                        <button className="w-full bg-primary text-white font-bold py-2 text-[16px] transition-opacity hover:opacity-90 cursor-pointer">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
