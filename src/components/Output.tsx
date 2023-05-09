"use client";
import React, { useEffect, useState } from "react";
import {
  AiOutlineCopy,
  AiOutlineShareAlt,
  AiOutlineSave,
} from "react-icons/ai";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const Output = ({
  appState,
}: {
  appState: { instructions: string[]; ingredients: string[] };
}) => {
  const { instructions, ingredients } = appState;

  return (
    <div className="rounded-lg w-full bg-slate-50 shadow-xl mt-12 p-4">
      <div className="flex flex-1 justify-between ">
        <h2 className="text-2xl text-bold mt-4">
          Your recipe is ready! Selamat Makan! 🎉🍝
        </h2>
        <div className="flex gap-8 mt-12">
          <AiOutlineCopy className="text-gray-600 text-2xl hover:cursor-pointer" />
          <AiOutlineShareAlt className="text-gray-600 text-2xl hover:cursor-pointer" />
          <AiOutlineSave className="text-gray-600 text-2xl hover:cursor-pointer" />
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Ingredients ingredients={ingredients} />
        <Instructions instructions={instructions} />
      </section>
    </div>
  );
};

export default Output;

//AiOutlineCopy
//AiOutlineShareAlt
//AiOutlineSave
