import { useState, useEffect } from "react";

const useFetch = (url, initalData) => {
  const [data, setData] = useState(initalData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) setError(true);
        else setData(res);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);
  return { data, loading, error };
};
export default useFetch;
