import Image from "next/image";
import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import BitshalaLogo from "@/public/images/bitshala_logo_jpg.png";

export default function TopNavigation() {
  const router = useRouter();
  const goTo = (event: string) => {
    switch (event) {
      case "community":
        router.replace("/community");
        break;
      case "events":
        router.replace("/events");
        break;
      case "hwu":
        router.replace("/hiretalent");
        break;
      case "fw":
        router.replace("/findwork");
        break;
      case "au":
        router.replace("/aboutus");
        break;
      case "login":
        router.replace("/auth");
        break;
    }
    return true;
  };
  return (
    <header className="w-full bg-primary-color bg-black text-primary-text-color font-primary-family">
      <nav
        className=" flex items-center w-full justify-start p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="-m-1.5 p-1.5">
            <span className="sr-only text-white">BitShala</span>
            <Image
              className="h-12 w-fit"
              src={BitshalaLogo}
              alt=""
              width="100"
              height="100"
            />
          </span>
        </div>
        <div className="nav_main text-[1.1rem]  lg:flex items-center lg:gap-x-12  flex gap">
          <Popover.Group className="hidden lg:flex text-white  lg:gap-x-12">
            <span
              className="font-semibold leading-6 hover:text-gray-300 cursor-pointer"
              onClick={() => goTo("community")}
            >
              Community
            </span>
            <span
              className="font-semibold leading-6 hover:text-gray-300 cursor-pointer"
              onClick={() => goTo("events")}
            >
              Events
            </span>
            <span
              className="font-semibold leading-6 hover:text-gray-300 cursor-pointer"
              onClick={() => goTo("hwu")}
            >
              Hire With Us
            </span>
            <span
              className="font-semibold leading-6 hover:text-gray-300 cursor-pointer"
              onClick={() => goTo("fw")}
            >
              Find Work
            </span>
            <span
              className="font-semibold leading-6 hover:text-gray-300 cursor-pointer"
              onClick={() => goTo("au")}
            >
              About Us
            </span>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <span
              className="font-semibold leading-6 hover:text-gray-300 cursor-pointer bg-purple-500 px-3 py-2 hover:bg-purple-600 rounded-lg text-white"
              onClick={() => goTo("login")}
            >
              Log in
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
