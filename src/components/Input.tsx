"use client";
import query from "@/lib/query";
import React, { useState } from "react";

export const Input = ({
  setAppState,
  setLoading,
}: {
  setAppState: Function;
  setLoading: Function;
}) => {
  const [url, setUrl] = useState("");
  const handleClick = async () => {
    setLoading(true);
    const res = await query(url);
    if (res === "ERROR") {
      setUrl("");
      setLoading(false);
      alert(
        "Something has gone wrong. Are you sure that is a valid link to a cooking recipe?"
      );
      return;
    }
    if (!res.message || !res?.message?.content)
      alert(
        "Something has gone wrong with the query. Please check your URL and make sure YouTube transcripts are turned on."
      );

    if (res?.message?.content!.includes("ERROR")) {
      setUrl("");
      setLoading(false);
      alert(
        "Something has gone wrong. Are you sure that is a valid link to a cooking recipe?"
      );
      return;
    }
    const processedResult = await JSON.parse(res?.message?.content!);

    setAppState(processedResult);
    setUrl("");
    setLoading(false);
  };

  return (
    <div className="flex w-full items-center justify-center mt-12 px-5">
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
