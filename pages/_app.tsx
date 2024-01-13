import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../style/globals.css";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // useEffect(() => {
  //   console.log("Running Router check, This Should be replaced?");
  //   const freePages = ["/auth", "/auth/signup", "/auth/login"];
  //   if (freePages.includes(router.pathname)) {
  //     return;
  //   }
  //   // Check if access token exists in sessionStorage
  //   const accessToken = sessionStorage.getItem("accessToken");
  //   const profileSetup = sessionStorage.getItem("profilesetup");

  //   if (!accessToken) {
  //     router.replace("/auth");
  //   } else {
  //     if (!profileSetup || profileSetup !== "true") {
  //       router.replace("/profilesetup");
  //     } else {
  //       router.replace("/events");
  //     }
  //   }
  // }, [router]);

  // Check if the current route is under /auth
  const isAuthPage = router.pathname.startsWith("/auth");
  const isProfileSetupPage = router.pathname.startsWith("/profilesetup");
  return !isAuthPage && !isProfileSetupPage ? (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    </Layout>
  ) : (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    </>
  );
}
