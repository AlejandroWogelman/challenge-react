import { ProductsView } from "../products/ProductsView";
import "./home.css";
export const Home = ({ info }) => {
  return (
    <>
      <h1 className="h1">Descubrí todos los modelos</h1>
      <main>
        <ProductsView info={info} />
      </main>
    </>
  );
};
