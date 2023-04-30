import React from "react";

export default function Header() {
  return (
    <div className="sticky top-0 w-full left-0 bg-slate-900 text-white flex items-center 
    justify-between p-4 border-b border-solid border-white">
      <h2 className="text-3xl sm:text-6xl select-none">TODO LIST</h2>
      <i class="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"></i>
    </div>
  );
}
