import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../utils/ValidationSchema";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Logo from "../utils/Logo";
import Login from "./Login";
import { useNavigate } from "react-router-dom"; 



const SignUp = () => {
   const navigate = useNavigate(); 
  const baseUrl = import.meta.env.VITE_API_URL;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${baseUrl}/api/auth/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      

      if (!result.success) {
        toast.error(result.errMsg || "Something went wrong!");
        return;
      }

      toast.success(result.message || "Sign up successful!", { duration: 3000 });

      reset();

      // Redirect to login page after delay using useNavigate
      setTimeout(() => {
        navigate("/login"); 
      }, 2000);

    } catch (error) {
      // console.error("Sign up error:", error);
      // toast.error("Sign up failed!");
      console.log(error.message);
    }
  };

  return (
    <>
      <Toaster />
      <main className="wrapper">
        <article className="flex justify-center items-center">

        <section>
          <form onSubmit={handleSubmit(onSubmit)} className="font-[500] text-[16px] leading-[26px] tracking-[0%] text-[#181A20D1]">
            <header>
              <h1 className="font-[600] text-[#181A20] md:text-[28px] leading-[26px] tracking-[0%]">
                Join our community of home seekers and explore the possibilities that await.
              </h1>
              <p className="font-[400] leading-[26px] tracking">
                Let's get started by filling out the information below
              </p>
            </header>

            <div className="flex flex-col gap-[20px]">
              <div className="lg:flex lg:gap-[44px] lg:w-full">
                <div>
                  <label htmlFor="firstName" className="block">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter Name"
                    className="border-[#DEDFE0] border-[2px] py-[15px] px-[12px] w-full"
                    {...register("firstName")}
                  />
                  <p className="text-red-600">{errors.firstName?.message}</p>
                </div>

                <div>
                  <label htmlFor="lastName" className="block">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter Name"
                    className="border-[#DEDFE0] border-[2px] py-[15px] px-[12px] w-full"
                    {...register("lastName")}
                  />
                  <p className="text-red-600">{errors.lastName?.message}</p>
                </div>
              </div>

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

              <div>
                <label htmlFor="cPassword" className="block">Confirm Password</label>
                <input
                  id="cPassword"
                  type="password"
                  placeholder="Confirm your Password"
                  className="border-[#DEDFE0] border-[2px] py-[15px] px-[12px] w-full"
                  {...register("cPassword")}
                  />
                <p className="text-red-600">{errors.cPassword?.message}</p>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="terms"
                  className="mr-2"
                  {...register("terms")}
                  />
                <label htmlFor="terms">
                  I agree to <span className="text-[#3D9970]">Terms Of Service</span> and <span className="text-[#3D9970]">Privacy Policies</span>
                </label>
                <p className="text-red-600">{errors.terms?.message}</p>
              </div>

              <div className="flex flex-col gap-[14px]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#3D9970] text-white font-[400] text-[22px] leading-[50px] tracking-[0%]"
                  >
                  {isSubmitting ? "Submitting..." : "Sign Up"}
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
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#3D9970]">Sign in</Link>
                </p>
              </div>
            </div>
          </form>
        </section>
        {/* section for desktop image */}
<section className="hidden lg:block bg-[url('/Frame%208325.png')] rounded-[12px] bg-cover bg-center bg-no-repeat text-white w-1/2 h-screen">
  {/* Desktop-only content (e.g., logo or image) */}
  <Logo />
</section>
                    </article>
      </main>
    </>
  );
};

export default SignUp;
