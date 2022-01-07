import React from "react";

export default function Container({ children }) {
  return (
    <div className="container mx-auto px-5 overflow-x-hidden	">{children}</div>
  );
}
