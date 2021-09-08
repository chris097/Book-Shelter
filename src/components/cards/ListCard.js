import React from 'react';
import books from '../../data/books';

const ListCard = ({
  active,
  toggleCard
}) => {
  return (
    <>
      <div className="m-lf pr-10 mb-10 pt-36 relative cursor-pointer">
        { !books ? 'No Book Found' : books[active].book_category?.map((book, index) => (
          <div key={index} onClick={() => toggleCard(book)}
            className="w-full h-213 bg-white rounded-lg mr-6 mt-5 py-4 pl-5">
            <div className="flex">
              <div className="w-369 h-178 bg-secondaryBlue rounded-lg px-4 inline-block">
                {!book ? <div className=" text-36">?</div> : <div className="flex justify-center items-center"><img className="w-353 h-144" src={book.url} alt="img" /></div>}
              </div>
              <div className="flex items-center ml-5">
                <div>
                <h3 className="font-Rubik truncate text-36 w-80 font-500">{book.book_subname}</h3>
                <p className="text-13 text-lowGray font-Rubik">{book.book_author}</p>
                <p className="text-13 text-lowGray font-Rubik">{book.year}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ListCard;