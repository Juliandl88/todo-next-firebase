import React from "react";

export default function Layout(props) {
  const { children } = props;
  return (
    <div className="flex flex-col min-h-screen relative bg-slate-900 text-white">
      {children}
      Layout de la app
    </div>
  );
}
