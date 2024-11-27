"use client"

import ReviewTable from "@/components/Table"
import { useEffect, useState } from "react";
import { Review } from "@/types/reviews";

const Secret = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = async () => {    
    try {
      const response = await fetch("/api/reviews", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const data = await response.json();
      const filteredList = data.filter((review: Review) => review.status === false);
      setReviews(filteredList);

    } catch (error) {
      console.error("Error fetching reviews:", error);
    } 
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <main className='h-[78.4vh]'>
      <div className="container mx-auto h-full flex justify-center">
        <ReviewTable setReviews={setReviews} listReviews={reviews ?? []} />
      </div>
    </main>
  )
}

export default Secret;
