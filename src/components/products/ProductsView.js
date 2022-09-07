import React, { useEffect, useState } from "react";
import { filterCars } from "../../helpers/filterCars";
import { orderCars } from "../../helpers/orderCars";
import { Card } from "../cardProducts/Card";
import { Filter } from "../filterComponent/Filter";
import { Select } from "../select/Select";
import { SkeletonFilters } from "../skeletons.js/SkeletonFilters";
import { SkeletonProducts } from "../skeletons.js/SkeletonProducts";

import "./productsView.css";

export const ProductsView = ({ info }) => {
  const { data, loading } = info;
  const [cars, setCars] = useState([]);
  const [filters, setfilters] = useState({
    filter: "TODOS",
    order: "nothing",
  });

  const handleSetFilter = (key, value) => {
    setfilters({ ...filters, [key]: value });
  };

  useEffect(() => {
    //A cada cambio en el estado de filtros, se realiza el filtrado/ordenamiento de "cars". De esta manera al filtrar por categoría se mantiene el ordenamiento de "cars"

    const filterOne = filterCars(data, filters.filter);
    const filterTwo = orderCars(filterOne, filters.order);

    setCars([...filterTwo]);
  }, [filters]);

  useEffect(() => {
    if (!loading) {
      setCars(data);
    }
  }, [loading]);

  return (
    <section className="products-container">
      <div className="products-container__filters">
        {!loading ? (
          <>
            <Filter handleSetFilter={handleSetFilter} />
            <Select handleSetFilter={handleSetFilter} />
          </>
        ) : (
          <SkeletonFilters />
        )}
      </div>
      <div className="products-container__content">
        {!loading ? (
          cars.map((car) => <Card key={car.id} {...car} />)
        ) : (
          <SkeletonProducts />
        )}
      </div>
    </section>
  );
};
