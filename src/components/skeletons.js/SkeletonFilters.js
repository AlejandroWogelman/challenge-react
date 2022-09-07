import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "./styles.css";

export const SkeletonFilters = () => {
  return (
    <div className="m-auto skeleton-filters">
      <Skeleton count={1} height={55} />
    </div>
  );
};
