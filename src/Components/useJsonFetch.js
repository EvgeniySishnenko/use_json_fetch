import React, { useState, useEffect } from "react";

function useJsonFetch(url, opts) {
  const [data, setData] = useState(opts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(function (response) {
        if (response.status !== 200) {
          return Promise.reject(new Error(setError(response.statusText)));
        }
        return Promise.resolve(response);
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        setData(result.status);
        setLoading(true);
      })
      .catch(function (error) {
        console.log("error", error);
      })
      .finally(function () {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);
  return [data, loading, error];
}

export default useJsonFetch;
