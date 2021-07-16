import React from 'react';
import {ReactComponent as LogoIcon} from '../svgs/logo-svg.svg';
import { ReactComponent as FilterIcon } from '../svgs/filter-svg.svg';
import { ReactComponent as Arror } from '../svgs/arror-svg.svg';
import { FaSun } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';

const Header = ({book}) => {
  // console.log(book.book_category.length)
  return (
    <>
      <div className="flex justify-between bg-white shadow-sm px-6 py-1.5 h-14 fixed w-full z-50 items-center">
        <div className="flex font-DanScript">
          <LogoIcon />
          <span className="text-36">BookShelter</span>
        </div>
        <div className="flex">
          <div className="w-500 h-11 bg-secondaryBlue rounded-full pl-3 flex items-center">
            <BiSearch className="flex align-middle items-center mr-2" />
            <input type="search" className="bg-transparent outline-none" placeholder="Search books" />
          </div>
          <div className="w-32 flex text-center items-center">
            <FaSun className="ml-24 text-primaryYellow" />
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-white shadow-sm h-56 w-full mt-14 fixed z-40 px-6 items-center cursor-pointer">
        <div className="flex justify-between font-Rubik text-18">
          <div className="mt-0.5">Categories</div>
          <div className="bg-secondaryBlue text-primaryBlue h-35 justify-center w-116 rounded-full text-14 ml-40 flex items-center">{book.book_name}</div>
          <div className="mx-5 flex items-center"><Arror /></div>
          <div className="text-14 flex items-center font-Rubik text-primaryBlack">Showing  Result(s)</div>
        </div>
        <div className="bg-secondaryBlue w-116 h-35 my-2 flex items-center justify-center rounded-full">
          <span className="mr-2"><FilterIcon /></span>
          <span className="text-14 font-Rubik">Filter</span>
        </div>
      </div>
    </>
  )
}

export default Header;

