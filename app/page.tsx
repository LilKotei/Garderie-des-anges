import Navbar from "@/components/NavBar";
import React from "react";
import "./globals.css";
import Caroussel from "@/components/Caroussel";
// Inside page.tsx



export default function Home() {
  return (
    <>
      <Navbar />

      <div className="pt-24">
        <Caroussel />
      </div>
    </>
  );
}