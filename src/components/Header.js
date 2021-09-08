import React from 'react';
import books from '../data/books';
import {ReactComponent as LogoIcon} from '../svgs/logo-svg.svg';
import { ReactComponent as FilterIcon } from '../svgs/filter-svg.svg';
import { ReactComponent as Arror } from '../svgs/arror-svg.svg';
import { FaSun } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';

const Header = ({
  currentBook, 
  active,
  toggleFilter
}) => {

  return (
    <>
      <div className="flex justify-between bg-white shadow-sm px-6 py-2.5 h-20 fixed w-full z-40 items-center">
        <div className="flex font-DanScript">
          <LogoIcon />
          <span className="text-36">BookShelter</span>
        </div>
        <div className="flex">
          <div className="w-670 h-14 bg-secondaryBlue rounded-full pl-3 flex items-center">
            <BiSearch className="flex align-middle items-center mr-2 text-lowBlue h-6 w-6 mt-1" />
            <input type="search" className="w-full bg-transparent outline-none" placeholder="Search books" />
          </div>
          <div className="mr-5 flex text-center items-center">
            <FaSun className="ml-24 text-primaryYellow text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-white shadow-sm h-56 w-full mt-20 fixed z-30 px-6 items-center cursor-pointer">
        <div className="flex justify-between items-center font-Rubik text-18">
          <div className="">Categories</div>
          <div className="bg-secondaryBlue text-primaryBlue h-40 justify-center w-116 rounded-full text-14 ml-40 flex items-center">{!currentBook.book_name ? books[active].book_name : currentBook.book_name}</div>
          <div className="mx-5 flex items-center"><Arror /></div>
          <div className="text-14 flex items-center font-Rubik text-primaryBlack">Showing {!currentBook.book_category ? books[active].book_category.length : currentBook.book_category.length} Result(s)</div>
        </div>
        <button onClick={toggleFilter} className="bg-secondaryBlue w-116 h-45 my-2 flex items-center justify-center rounded-full">
          <span className="mr-2"><FilterIcon /></span>
          <span className="text-14 font-Rubik">Filter</span>
        </button>
      </div>
    </>
  )
}

export default Header;

