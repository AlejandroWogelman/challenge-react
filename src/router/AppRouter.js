import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Navbar } from "../components/nav/Navbar";
import { Details } from "../components/productDetails/Details";
import { useFetch } from "../hooks/useFetch";

export const AppRouter = () => {
  const { data, loading } = useFetch();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home info={{ data, loading }} />} />
        <Route path="/:name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
