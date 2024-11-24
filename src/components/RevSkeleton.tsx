import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

const RevSkeleton = () => {
  const [skeletonCount, setSkeletonCount] = useState(3);
  
  const updateSkeletonCount = () => {
    if (window.innerWidth >= 1000) {
      setSkeletonCount(3);
    } else {
      setSkeletonCount(1);
    }
  };

  useEffect(() => {
    updateSkeletonCount();
    window.addEventListener("resize", updateSkeletonCount);

    return () => {
      window.removeEventListener("resize", updateSkeletonCount);
    };
  }, []);

  return (
    <div className="flex gap-x-5 w-full">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Skeleton
          key={index}
          className={`${skeletonCount == 3 ? "w-1/3" : "w-full"} h-[330px] rounded-xl`}
        />
      ))}
    </div>
  );
};

export default RevSkeleton;
