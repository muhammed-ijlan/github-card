import React from "react";

function Card() {
  return (
    <div className="flex bg-gradient-to-tr from-blue-100 to-blue-200 rounded-x shadow-lg my-10">
      <div className="relative hidden lg:flex flex-col min-h-full items-center justify-center ">
        <img
          className="w-60 "
          src="https://www.kindpng.com/picc/m/1-18288_nike-shoes-hd-png-transparent-png.png"
          alt="profilepic"
        />
      </div>
      <div className="bg-white rounded-xl shadow-md h-70 flex flex-col relative w-72 flex-shrink-0 lg:w-96">
        <img
          className="absolute w-full top-0 transform lg:hidden -translate-y-1/2 "
          src="https://www.kindpng.com/picc/m/1-18288_nike-shoes-hd-png-transparent-png.png"
          alt="profileimg"
        />
        <div className="mt-26 px-6 text-gray-700 flex-1 lg:mt-16">
          <h2
            className="text-black font-extrabold  text-2xl tracking-wide leading-none
              "
          >
            Samuel Sam
          </h2>
          <h3 className="text-sm mt-2 text-gray-500 font-bold">
            username : samuel_john
          </h3>

          <div className="my-2">
            <p className="my-2  text-xs font-bold flex">
              No. of public repos :{" "}
              <pre className="text-base font-normal"> 02</pre>
            </p>
            <p className="my-2  text-xs font-bold flex">
              No. of public gists :{" "}
              <pre className="text-base font-normal"> 50</pre>
            </p>
            <p className="my-2  text-xs font-bold flex">
              Profile created at :{" "}
              <pre className="text-base font-normal"> 10/12/2102</pre>
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Card;
