import { useEffect, useState } from "react";

const useFetch = (endpoint, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    setLoading(true);
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => setError(error?.message))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, setData, loading, setLoading, error, setError };
};

export default useFetch;
