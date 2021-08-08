import React from 'react';
import { ReactComponent as Cancel } from '../../svgs/cancel-icon.svg';

const DetailBook = ({ cancelModal, data }) => {
  console.log(data)
  return (
    <>
      <div onClick={cancelModal} className="w-full h-full fixed z-50 bg-gray-700 opacity-60 top-0 right-0"></div>
      <div className="bg-white shadow w-480 fixed top-0 right-0 h-full z-50 overflow-y-auto font-Rubik">
        <div className="bg-secondaryBlue h-68 w-full font-Rubik flex justify-between items-center px-6">
          <div className=" text-18">{!data.book_subname ? 'N/A' : data.book_subname }</div>
          <div><Cancel onClick={cancelModal} className="text-primaryGray" /></div>
        </div>
        <div>
          <div className="flex justify-center my-4">{!data.url ? <div className=" text-36">?</div> : <img src={data.url} alt="img" className="w-201 h-150" /> }</div>
          <div className="px-6 w-full h-120 overflow-y-auto my-6 text-primaryGray">{!data.description ? 'N/A' : data.description }</div>
          <div>
            <div className="px-6 flex mt-3 items-center text-14">
              Author: <span className="bg-secondaryBlue text-primaryBlue rounded-full h-30 ml-4 flex items-center px-2">{data.book_author}</span>
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
          <div className="bottom-0 absolute">footer</div>
        </div>
      </div>
    </>
  )
};

export default DetailBook;
