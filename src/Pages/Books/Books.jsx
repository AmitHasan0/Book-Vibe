import React from "react";
import { useLoaderData } from "react-router";
import Book from "./Book";

const Books = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mb-10">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {books.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
