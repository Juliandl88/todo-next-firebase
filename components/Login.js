import React from "react";

export default function Login() {
  return (
    <div className="flex-1 text-sm sm:text-xs flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="font-extrabold text-2xl sm:text-4xl select-none">LOGIN</h1>
      <input
        type="text"
        placeholder="Enter your email"
        className="outline-none duration-300 border-b-2 border-solid border white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]"
      />
      <input
        type="text"
        placeholder="Enter password"
        className="outline-none duration-300 border-b-2 border-solid border white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]"
      />
      <button className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900">
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
    </div>
  );
}
