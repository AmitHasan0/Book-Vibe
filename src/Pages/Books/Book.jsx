import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookId,
    yearOfPublishing,
    bookName,
    author,
    image,
    category,
    rating,
    tags,
  } = book;
  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border p-4">
        <figure className="p-4 bg-gray-200 w-2/3 mx-auto">
          <img className="h-[166px] " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center items-center gap-10">
            {tags.map((tag) => (
              <button className="text-green-500 bg-green-50 p-2 rounded-2xl">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p> {author}</p>
          <div className="card-actions justify-around border-t-1 border-dashed py-2">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating}
              <FaStarHalfAlt color="gold" className=" " />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
