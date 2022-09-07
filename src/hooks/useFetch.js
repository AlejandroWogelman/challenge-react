import React, { useEffect, useState } from "react";
import { getProducts } from "../services/getProducts";

export const useFetch = (url = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts(url)
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return { data, loading };
};
