import React from 'react';
import books from '../data/books';


const Sidebar = ({ setActive, getBook, active }) =>{

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
      <div className="bg-white shadow-sm w-260 h-full fixed -mt-2 z-20 px-7 font-Rubik cursor-pointer overflow-y-hidden">
        <div className="z-50 mt-36 h-full text-left text-14">
          <p className="pt-3">A curated list of every book ever written</p>
            <div className="mt-4">
              {books?.map((book, index )=> (
                <div key={index} onClick={() => {
                  setActive(index)
                  getBook(book)
                }} className="mt-4 flex justify-between px-2 rounded-2xl h-56 items-center" style={{ backgroundColor: `${index === active ? '#F8FAFD' : ''}`}}>
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