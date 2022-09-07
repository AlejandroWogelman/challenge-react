import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./styles.css";

export const SkeletonProducts = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="products-container__content m-auto">
      {skeletons.map((el) => (
        <Skeleton key={el} count={1} height={215} />
      ))}
    </div>
  );
};
