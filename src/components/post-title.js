import React from "react";

export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-3xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left tracking-wide">
      {children}
    </h1>
  );
}
