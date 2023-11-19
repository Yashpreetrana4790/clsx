"use client";
import React from "react";
import Button from "@/components/button";

const page = () => {
  return (
    <>
      <div className="min-h-screen">
        <Button onClick={() => alert("asd")}>random</Button>
        <Button>sandom</Button>
        <Button className="bg-red-600">sweet</Button>
      </div>
    </>
  );
};

export default page;
