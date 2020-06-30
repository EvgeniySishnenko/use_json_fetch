import React, { useState, useEffect } from "react";

import useJsonFetch from "./useJsonFetch";
export default function Error() {
  const [data, loading, error] = useJsonFetch(
    "http://localhost:7070/error",
    []
  );

  return (
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
  );
}
