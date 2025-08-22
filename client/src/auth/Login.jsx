import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/ValidationSchema";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../utils/Logo";
import { useAuth } from "../context/AuthContext"; 

const Login = () => {
  const { login } = useAuth(); 
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${baseUrl}/api/auth/sign-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
      

      if (!result.success) {
        toast.error(result.errMsg || "Login failed");
        reset();
        return;
      }

      toast.success(result.message || "Login successful");
      login(result.user.token, result.user); 
      reset();
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      console.log(error.message);
      console.error("Login error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Toaster />
      <main className="wrapper">
        <article className="flex justify-center items-center">
          <section>
            <form onSubmit={handleSubmit(onSubmit)}>
              <header>
                <h1 className="font-[600] text-[#181A20] md:text-[28px] leading-[26px]">
                  Welcome Back to BetaHouse!
                </h1>
                <p className="font-[400] leading-[26px]">
                  Let's get started by filling out the information below
                </p>
              </header>

              <div className="flex flex-col gap-[20px]">
                <div>
                  <label htmlFor="email" className="block">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your Email"
                    className="border-[#DEDFE0] border-[2px] py-[15px] px-[12px] w-full"
                    {...register("email")}
                  />
                  <p className="text-red-600">{errors.email?.message}</p>
                </div>

                <div>
                  <label htmlFor="password" className="block">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your Password"
                    className="border-[#DEDFE0] border-[2px] py-[15px] px-[12px] w-full"
                    {...register("password")}
                  />
                  <p className="text-red-600">{errors.password?.message}</p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="remember" {...register("remember")} />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <div>
                    <span className="text-red-700 cursor-pointer">Forgot Password</span>
                  </div>
                </div>

                <div className="flex flex-col gap-[14px]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#3D9970] text-white font-[400] text-[22px] leading-[50px]"
                  >
                    {isSubmitting ? "Submitting..." : "Sign In"}
                  </button>

                  <div className="flex items-center py-4">
                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                    <span className="mx-4 text-gray-500">or</span>
                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                  </div>

                  <button className="w-full flex items-center justify-center border border-black rounded-lg py-3 text-gray-700 font-medium hover:bg-gray-100 transition">
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google Icon"
                      className="w-6 h-6 mr-3"
                    />
                    Continue with Google
                  </button>

                  <p className="text-center py-3 text-[#716F6F]">
                    New User? <Link to="/signup" className="text-[#3D9970]">Sign up</Link>
                  </p>
                </div>
              </div>
            </form>
          </section>

          {/* Right side image on desktop */}
          <section className="hidden lg:block bg-[url('/Frame%208325.png')] rounded-[12px] bg-cover bg-center bg-no-repeat text-white w-1/2 h-screen">
            <Logo />
          </section>
        </article>
      </main>
    </>
  );
};

export default Login;
