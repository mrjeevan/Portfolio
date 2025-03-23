import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-zinc-800 min-h-screen container">{children}</div>;
};

export default Layout;
