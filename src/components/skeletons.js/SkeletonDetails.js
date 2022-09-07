import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./styles.css";

export const SkeletonDetails = () => {
  return (
    <div className="skeleton-details m-auto">
      <Skeleton count={1} />
      <Skeleton count={1} />
    </div>
  );
};
