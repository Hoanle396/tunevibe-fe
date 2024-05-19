"use client";
import React from "react";
import NFTDetail from "./components/NFTDetail";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

const NFTDetailPage = () => {
  return (
    <div>
      <Header />
      <NFTDetail />
      <Footer />
    </div>
  );
};

export default NFTDetailPage;
