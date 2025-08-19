import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BookDetails = () => {
  const { id } = useParams();
  const singleId = parseInt(id);
  const bookData = useLoaderData();
  const [loading, setLoading] = useState(true);

  const book = bookData.find((book) => book.bookId === singleId);

  const { category, review, bookName, author, image } = book;

  return (
    <div className="flex gap-10 playfair-display">
      <div className="bg-gray-200 rounded-2xl p-30">
        <img className="w-[1300px]" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-2 mt-10">{bookName}</h1>
        <p className="font-bold text-gray-500 mb-2">By: {author}</p>
        <h3 className="border-t-1 border-dashed border-b-1 p-2">{category}</h3>
        <p>
          <span className="font-bold">Review:</span>
          {review}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
