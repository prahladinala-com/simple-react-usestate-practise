import NavLink from "./NavLink";
import { useState } from "react";

function Navbar() {
  const [heading, setHeading] = useState("Home Page*");
  const [desc, setDesc] = useState("This is a Home Page");
  const [btnList, setBtnList] = useState(["Button 01", "Button 02"])

  function handleHomeClick() {
    setHeading("Home Page");
    setDesc("Home Page Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
    setBtnList(["Get Started", "View Docs"])
  }

  function handleAboutClick() {
    setHeading("About Page");
    setDesc("About Page Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
    setBtnList(["About Us", "View Docs"])
  }

  function handleServiceClick() {
    setHeading("Service Page");
    setDesc("Service Page Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
    setBtnList(["Our Services", "Contact Us"])
  }

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img
              src="https://toolmate.co.in/assets/logo/ToolmateLight.png"
              className="w-10"
            />
          </span>
          <span className="font-bold">ToolMate</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <NavLink title="Home" results={handleHomeClick} />
            <NavLink title="About" results={handleAboutClick} />
            <NavLink title="Service" results={handleServiceClick} />
          </ul>
        </div>
      </div>

      <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-24">
        <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z">
            </path>
            <defs>
              <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC"></stop>
                <stop offset="1" stop-color="#FF80B5"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {`Here is the ${heading}`}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
           {`${desc}`}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-2">
            <a href="https://blogs.prahladinala.in"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              {`${btnList[0]}`}
            </a>
            <a href="https://blogs.prahladinala.in"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              {`${btnList[1]}`}
            </a>
          </div>
        </div>
      </div>
    </div>

      <h1 className="text-3xl ml-20"></h1>
    </div>
  );
}

export default Navbar;
