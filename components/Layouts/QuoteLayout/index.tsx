import { QuoteFoot } from "@/components/Footer/QuoteFoot";
import React from "react";
import { Navbar } from "../../Navbar";

interface QuoteLayoutprops {
  children: React.ReactNode;
}

export function QuoteLayout({ children }: QuoteLayoutprops) {
  return (
    <>
      <Navbar />
      <div className="h-[100vh] mt-[100px]">
        {children}
        <QuoteFoot />
      </div>
    </>
  );
}
