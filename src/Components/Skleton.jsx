import React from "react";

const Skeleton= () => {
  return (
    <div className="flex flex-wrap">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="w-64 h-80 bg-gray-200 m-4 rounded-lg animate-pulse"
        >
          {/* Card Header Skeleton */}
          <div className="w-full h-40 bg-gray-300 rounded-t-lg"></div>

          {/* Card Body Skeleton */}
          <div className="p-4">
            <div className="h-6 bg-gray-300 mb-4 rounded"></div>
            <div className="h-4 bg-gray-300 mb-2 rounded"></div>
            <div className="h-4 bg-gray-300 mb-2 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
