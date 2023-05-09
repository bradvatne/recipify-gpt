"use client";
import { Input } from "./Input";
import { useState } from "react";
import Loading from "./Loading";
import React from "react";
import Output from "./Output";
import { Circles } from "react-loader-spinner";

const State = () => {
  const [appState, setAppState] = useState();
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div className="flex p-32 flex-col">
        <h2 className="text-4xl drop-shadow-xl font-extrabold  text-center text-red-500">
          Loading...
        </h2>
        <Circles
          height="160"
          width="160"
          color="#EF4444"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="mt-8"
          visible={true}
        />
      </div>
    );
  }
  return (
    <>
      <Input setAppState={setAppState} setLoading={setLoading} />
      {loading && <Loading />}
      {appState && !loading && <Output appState={appState} />}
    </>
  );
};

export default State;
