"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import React from "react";
import FloatingContactButton from "@/components/ui/FloatingContactButton";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Main />
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Page;