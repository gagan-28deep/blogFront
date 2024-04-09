import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { Loader } from "../index";
import { Link } from "react-router-dom";
import UserAvatar from "../../assets/UserAvatar.png"
function Signup() {
  const [profileImage, setProfileImage] = React.useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const { handleSignUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signupUser = async (data) => {
    // SignUp User
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.append("name" , data?.name)
    formData.append("email", data.email);
    formData.append("username", data.username);
    formData.append("password", data.password);


    handleSignUp(formData)
    // handleSignUp({...data , profileImage});
    // handleSignUp(data);
  };
  const isLoading = useSelector((state) => state.auth.userLoading);
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link className="font-medium text-black transition-all duration-200 hover:underline" to="/login">
                Sign In
              </Link>
            </p>
            <form onSubmit={handleSubmit(signupUser)} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      {...register("name", {
                        required: true,
                      })}
                    ></input>
                    {errors.name && (
                      <p className="text-red-700">name is required.</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      {...register("email", {
                        required: true,
                        validate: {
                          matchPatern: (value) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                              value
                            ) || "Email address must be a valid address",
                        },
                      })}
                    ></input>
                    {errors.email?.type === "required" && (
                      <p className="text-red-700">email is required.</p>
                    )}
                    {errors.email && (
                      <p className="text-red-700">{errors?.email?.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Username{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Username"
                      id="username"
                      {...register("username", {
                        required: true,
                      })}
                    ></input>
                    {errors.username?.type === "required" && (
                      <p className="text-red-700">username is required.</p>
                    )}
                  </div>
                </div>
                {/* <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="profileImage"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Profile Image{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="file"
                      placeholder="Profile Image"
                      id="profileImage"
                      // {...register("profile image")}
                      onChange={handleImageChange}
                    ></input>
                  </div>
                </div> */}

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="profileImage"
                    className="text-base font-medium text-gray-900"
                  >
                    Profile Image
                  </label>
                </div>
                <div className="mt-2">
                  <input
                   className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                    id="profileImage"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      {...register("password", {
                        required: true,
                        minLength: {
                          value: 6,
                          message: "Password should be atleast 6+ characters",
                        },
                      })}
                    ></input>
                    {errors.password?.type === "required" && (
                      <p className="text-red-700">password is required.</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-700">{errors.password.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
            {isLoading && <Loader />}
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Signup;
