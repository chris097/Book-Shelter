import React from 'react';
import books from '../data/books';
// import { ReactComponent as Image } from '../svgs/image1-svg.svg';

export const Card = ({
  active, 
  toggleCard
}) => {
  return (
    <>
      <div className="pt-36 m-lf relative flex flex-wrap mb-10">
          { books[active].book_category?.map((book, index) => (
            <div key={index} onClick={() => toggleCard(book)} className="w-282 h-369 bg-white rounded-lg mr-6 mt-5">
              <div className="w-249 h-238 bg-secondaryBlue mx-auto mt-4 flex justify-center items-center rounded-lg">
                {!book ? <div className=" text-36">?</div> : <img src={book.url} alt="img" />}
              </div>
              <div className="ml-4 mt-4">
                <h3 className="font-Rubik text-18 font-medium truncate w-44">{book.book_subname}</h3>
                <p className="text-13 text-lowGray font-Rubik">{book.book_author}</p>
                <p className="text-13 text-lowGray font-Rubik">{book.year}</p>
              </div>    
            </div>
          ))}
      </div>
    </>
  )
}
