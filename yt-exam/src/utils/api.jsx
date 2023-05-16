import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': '157b9ea064msh90184751c932591p1d3703jsn82a88f20db9b',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }

  };

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        setError(response.status);
      }

      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;