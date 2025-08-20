import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

import "react-loading-skeleton/dist/skeleton.css";
import { addToStoredDB } from "../../utilities/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const BookDetails = () => {
  const { id } = useParams();
  const singleId = parseInt(id);
  const bookData = useLoaderData();

  const book = bookData.find((book) => book.bookId === singleId);

  const {
    totalPages,
    yearOfPublishing,
    rating,
    tags,
    category,
    review,
    bookName,
    author,
    image,
  } = book;

  const handleMarkAsRead = (id) => {
    const swalWithBootstrapButtons = MySwal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Added To The Read List!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Success!",
            text: "You just added it to the read list.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "You have removed it from the read list :)",
            icon: "error",
          });
        }
      });

    addToStoredDB(id);
  };

  return (
    <div className="flex gap-10 playfair-display">
      <div className="  bg-gray-200 p-20 rounded-2xl shadow">
        <img className="max-w-full" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-2 mt-10">{bookName}</h1>
        <p className="font-bold text-gray-500 mb-2">By: {author}</p>
        <h3 className="border-t-1 border-dashed border-b-1 p-2 mb-4">
          {category}
        </h3>
        <p className="text-gray-500">
          <span className="font-bold text-black">Review : </span>
          {review}
        </p>
        <div className="flex gap-5 mt-5 items-center border-b-1 border-gray-300 pb-2">
          <h5 className="font-bold">Tag</h5>
          <button className="text-green-700 bg-green-100 rounded-2xl p-2">
            #{tags}
          </button>
          <button className="text-green-700 bg-green-100 rounded-2xl p-2">
            #{tags}
          </button>
        </div>
        <div className="flex gap-10">
          <div className="text-gray-500 p-10">
            <p>Number of Pages: </p>
            <p>Publisher: </p>
            <p>Year of Publishing: </p>
            <p>Rating: </p>
          </div>
          <div className="font-bold p-10">
            <p>{totalPages}</p>
            <p>{author}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="flex gap-5 mb-10">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn btn-outline p-7 font-bold text-xl"
          >
            Read
          </button>
          <button className="btn btn-info p-7 font-bold text-xl">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
