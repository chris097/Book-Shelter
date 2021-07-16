import React from 'react';
import books from '../data/books';


const Sidebar = ({ bookDetails }) =>{

  function bookName(name){
    let parts = name?.split(' ');
  let initial = '';
    parts?.forEach(part => {
      initial += part.slice(0, 2);
    })
    return initial;
  }

  return(
    <>
      <div className="bg-white shadow-sm w-260 h-full fixed -mt-2 z-30 px-7 font-Rubik cursor-pointer overflow-y-hidden">
        <div className="z-50 mt-32 h-full text-left text-14">
          <p>A curated list of every book ever written</p>
            <div className="mt-4">
              {books?.map((book, index )=> (
                <div key={index} onClick={() => bookDetails(book)} className="mt-6 flex justify-between bg-secondaryBlue px-2 rounded-2xl h-56 items-center">
                <div><span className="bg-primaryRed text-white text-16 font-bold rounded-full p-1">{bookName(book.book_name)}</span><span className="ml-1">{book.book_name}</span></div>
                <div className="text-primaryGray">{book.book_category.length}</div>
              </div>
              ))}
            </div>
          </div>
      </div>
    </>
  )
};

export default Sidebar;