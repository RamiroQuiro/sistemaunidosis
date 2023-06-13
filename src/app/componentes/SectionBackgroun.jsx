import React from "react";

export default function SectionBackgroun({ children }) {
  return (
    <section className="min-h-screen  w-full py-20 text-gray-700 flex flex-col items-center justify-center m-auto relative">
      {children}
    </section>
  );
}
