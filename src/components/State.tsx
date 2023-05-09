"use client";
import { Input } from "./Input";
import { useState } from "react";
import React from "react";
import Output from "./Output";

const State = () => {
  const [appState, setAppState] = useState();

  return (
    <>
      <Input setAppState={setAppState} />
      <Output appState={appState} />
    </>
  );
};

export default State;
