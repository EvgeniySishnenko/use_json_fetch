import React, { useState, useEffect } from "react";

import useJsonFetch from "./useJsonFetch";
export default function Loading() {
  const [data, loading, error] = useJsonFetch(
    "http://localhost:7070/loading",
    []
  );

  return (
    <>
      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
}
