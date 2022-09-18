import React from "react";

function Card({ user }) {

  return (
    <div className="flex bg-gradient-to-tr from-blue-100 to-blue-200 rounded-x shadow-lg my-10">
      <div className="relative hidden lg:flex flex-col min-h-full items-center justify-center ">
        <img
          className="w-60 "
          src={user?.userImg}
          alt="profilepic"
        />
      </div>
      <div className="bg-white rounded-xl shadow-md h-70 flex flex-col relative w-72 flex-shrink-0 lg:w-96">
        <img
          className="absolute w-full top-0 transform lg:hidden -translate-y-1/2 " alt="userimg"
          src={user?.userImg}
        />
        <div className="mt-26 px-6 text-gray-700 flex-1 lg:mt-16">
          <h2
            className="text-black font-extrabold  text-2xl tracking-wide leading-none
              "
          >
            {user?.userName}
          </h2>
          <h3 className="text-sm mt-2 text-gray-500 font-bold">
            username : {user?.userId}
          </h3>

          <div className="my-2">
            <p className="my-2  text-xs font-bold flex">
              No. of public repos :{" "}
              <pre className="text-base font-normal">{user?.repo}</pre>
            </p>
            <p className="my-2  text-xs font-bold flex">
              No. of public gists :{" "}
              <pre className="text-base font-normal">{user?.gist}</pre>
            </p>
            <p className="my-2  text-xs font-bold flex">
              Profile created at :{" "}
              <pre className="text-base font-normal">{user?.created}</pre>
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Card;
