"use client";
import { Input } from "./Input";
import { useState } from "react";
import Loading from "./Loading";
import React from "react";
import Output from "./Output";

const State = () => {
  const [appState, setAppState] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Input setAppState={setAppState} setLoading={setLoading} />
      {loading && <Loading />}
      {appState && !loading && <Output appState={appState} />}
    </>
  );
};

export default State;
