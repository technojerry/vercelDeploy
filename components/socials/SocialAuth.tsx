// SocialAuth.tsx
import React from "react";

import googleLogo from "@/public/images/google-logo.png";
import facebookLogo from "@/public/images/facebook-logo.png";
import githubLogo from "@/public/images/github-logo.png";
import Image, { StaticImageData } from "next/image";
import apiUtil from "@/lib/api-util";
import { useRouter } from "next/router";

interface SocialAuthProps {
  auth: string;
}

interface SocialLogo {
  [x: string]: StaticImageData;
}
interface LoginEndpoint {
  [x: string]: string;
}

const SocialAuth: React.FC<SocialAuthProps> = ({ auth }) => {
  const router = useRouter();

  const socialLogos: SocialLogo = {
    google: googleLogo,
    facebook: facebookLogo,
    github: githubLogo,
  };

  const loginEndpoints: LoginEndpoint = {
    google: "/google",
    facebook: "/facebook",
    github: "/github",
  };
  const currentButton = socialLogos[auth];

  const handleLogin = async () => {
    const redirectUrl = apiUtil.backendUrl + loginEndpoints[auth];
    router.push(redirectUrl);
  };

  return (
    <div onClick={handleLogin}>
      <Image
        className="mx-4 h-6 w-auto"
        src={currentButton}
        alt="Social Button"
        height="100"
        width="100"
      />
    </div>
  );
};

export default SocialAuth;
