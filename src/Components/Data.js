import React, { useState, useEffect } from "react";
import useJsonFetch from "./useJsonFetch";
export default function Data() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data", []);

  return (
    <div className="alert alert-primary" role="alert">
      Статус: {data}
    </div>
  );
}
