import React from "react";
import HeaderWrapper from "./UI/Header/HeaderWrapper";

export const metadata = {
  title: "Lorem Ipsum",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <section className="relative">
      <HeaderWrapper>
        <div className="box-width border-2 border-white shadow-xs shadow-blue-300 px-3 py-5 rounded-4xl bg-white/80 backdrop-blur-xs">
          texting
        </div>
      </HeaderWrapper>
      {children}
    </section>
  );
}
