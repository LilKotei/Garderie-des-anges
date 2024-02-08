import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="bg-white w-full h-full">
      <Navbar />
    </div>
  );
}