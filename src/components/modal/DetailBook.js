import React from 'react';
import { FaSun } from 'react-icons/fa';
import { ReactComponent as Cancel } from '../../svgs/cancel-icon.svg';

const DetailBook = ({ cancelModal, bookDetails }) => {
  console.log(bookDetails)
  return (
    <>
      <div onClick={cancelModal} className="w-full h-full fixed z-50 bg-gray-700 opacity-60 top-0 right-0"></div>
      <div className="bg-white shadow w-480 fixed top-0 right-0 h-full z-50 overflow-y-auto font-Rubik">
        <div className="bg-secondaryBlue h-60 w-full font-Rubik flex justify-between items-center px-6">
          <div className=" text-18">{!bookDetails.book_subname ? 'N/A' : bookDetails.book_subname }</div>
          <div><Cancel onClick={cancelModal} className="text-primaryGray" /></div>
        </div>
        <div>
          <div className="flex justify-center my-4">{!bookDetails.url ? <div className=" text-36">?</div> : <img src={bookDetails.url} alt="img" className="w-201 h-150" /> }</div>
          <div className="px-6 w-full h-120 overflow-y-auto pt-2 text-primaryGray text-13">{!bookDetails.description ? 'N/A' : bookDetails.description }</div>
          <div>
            <div className="px-6 flex mt-2 items-center text-14">
              Author: <span className="bg-secondaryBlue text-primaryBlue rounded-full h-30 ml-4 flex items-center px-2">{bookDetails.book_author}</span>
            </div>
            <div className="px-6 flex mt-3 items-center text-14">
              Published:  <span className="bg-secondaryBlue text-primaryBlue rounded-full h-30 ml-4 flex items-center px-2">1996</span>
            </div>
            <div className="px-6 flex mt-3 items-center text-14">
              Publishers: <span className="bg-secondaryBlue text-primaryBlue rounded-full h-30 ml-4 flex items-center px-2">Hollman</span>
            </div>
            <div className="px-6 flex mt-3 items-center text-14">
              ISBN: <span className="bg-secondaryBlue text-primaryBlue rounded-full h-30 ml-4 flex items-center px-2">235527BG089</span>
            </div>
          </div>
          <div className="bottom-0 absolute bg-secondaryBlue w-full h-12 text-12 flex items-center px-5 font-Rubik text-primaryGray">
            <div>
              <button className="bg-xGray text-white w-10 h-6 rounded">TAB</button>
              <button className="bg-xGray text-white w-10 h-6 rounded mx-3">T</button>
              <button className="bg-xGray text-white w-10 h-6 rounded">T</button>
              <span className="ml-3">To Navigator</span>
            </div>
            <div>
              <button className="bg-xGray text-white w-10 h-6 rounded mx-3">ESC</button>
              <span>To Escape</span>
            </div>
            <div className="bg-white w-16 h-7 rounded-full ml-8 flex items-center">
              <FaSun className="text-primaryYellow text-xl ml-1.5" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default DetailBook;
