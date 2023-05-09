"use client";
import query from "@/lib/query";
import React, { useState } from "react";

export const Input = ({ setAppState }: { setAppState: Function }) => {
  const [url, setUrl] = useState("");
  const handleClick = async () => {
    const res = await query(url);
    setAppState(res);
    console.log(res)
  };

  return (
    <div className="flex w-full items-center justify-center mt-12">
      <input
        type="text"
        className="p-6 rounded-xl flex flex-1"
        placeholder="Paste a youtube video URL ex. https://youtube.com/"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      ></input>
      <button
        className="p-6 rounded-xl bg-red-500 text-white text-semibold ml-5"
        onClick={() => handleClick()}
      >
        Submit
      </button>
    </div>
  );
};

export default Input;

//iterates over an array of strings and prints the first 10 characters of each followed by ...
