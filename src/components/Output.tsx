"use client";
import React from "react";
import {
  AiOutlineCopy,
  AiOutlineShareAlt,
  AiOutlineSave,
} from "react-icons/ai";

const Output = ({ appState }: { appState: any }) => {
  const pattern = /\d+\.\s/g;

  return (
    <div className="rounded-lg w-full bg-slate-50 shadow-xl mt-12 p-4 mx-4">
      <div className="flex flex-1 justify-between ">
        <h2 className="text-2xl text-bold">
          Your recipe is ready! Selamat Makan! 🎉🍝
        </h2>
        <div className="flex gap-8">
          <AiOutlineCopy className="text-gray-600 text-2xl hover:cursor-pointer" />
          <AiOutlineShareAlt className="text-gray-600 text-2xl hover:cursor-pointer" />
          <AiOutlineSave className="text-gray-600 text-2xl hover:cursor-pointer" />
        </div>
      </div>
      <section
        className="flex flex-row flex-wrap"
        onClick={() =>
          console.log(appState.message.content.replace(pattern, ""))
        }
      >
        {appState && `${appState.message.content}`}
      </section>
    </div>
  );
};

export default Output;

//AiOutlineCopy
//AiOutlineShareAlt
//AiOutlineSave
