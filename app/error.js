"use client";

import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.log("err => ", error);
  }, [error]);

  return (
    <div>
      <p>Error! Somthing went wrong.</p>
    </div>
  );
}
