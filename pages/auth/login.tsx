import { useState } from "react";
import Image from "next/image";
import apiUtil from "@/lib/api-util";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import SocialAuth from "@/components/socials/SocialAuth";

export default function Page() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) {
      // handle empty check?
    }
    try {
      const body = {
        username,
        password,
      };
      const { error, data } = await apiUtil.postRequest("/user/login", body);
      if (error) {
        let errorMessage = error?.message || "Bad Request";
        if (error?.data?.error && typeof error?.data?.error === "string") {
          console.log("in here");
          errorMessage = error?.data?.error;
        }
        toast.error(errorMessage);
      }
      console.log("data from ", JSON.stringify(data));
      const token = data?.data?.token;
      const profileSetup = data?.data?.profileSetup ? "true" : "false";
      if (!token) {
        toast.error("No Token Recieved, Try Again");
      }
      sessionStorage.setItem("accessToken", token);
      sessionStorage.setItem("profilesetup", profileSetup);
      if (profileSetup === "true") {
        router.replace("/events");
      } else {
        router.replace("/profilesetup");
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.log("handler for response error?");
    }
  };

  const routeToSignup = () => {
    console.log("what is over here is over here");
    router.replace("/auth/signup");
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
            height="100"
            width="100"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={handleUsernameChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handlePasswordChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <SocialAuth auth="google" />
              <SocialAuth auth="github" />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <span
              onClick={routeToSignup}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Click Here To Signup Now
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
