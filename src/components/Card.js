import React from 'react'
// import { ReactComponent as Image } from '../svgs/image1-svg.svg';

export const Card = ({book, toggleCard}) => {

  return (
    <>
      <div className="pt-36 m-lf relative flex flex-wrap mb-10">
        { !book ? <div className="mx-auto mt-44">No data found...</div> :  book.book_category?.map((data, index) => (
          <div key={index} onClick={() => toggleCard(data)} className="w-282 h-369 bg-white rounded-lg mr-6 mt-5">
            <div className="w-249 h-238 bg-secondaryBlue mx-auto mt-4 flex justify-center items-center rounded-lg">
              {!data.url ? <div className=" text-36">?</div> : <img src={data.url} alt="img" /> }
              </div>
                <div className="ml-4 mt-4">
                <h3 className="font-Rubik text-18 font-medium truncate w-44">{!data.book_subname ? 'N/A' : data.book_subname}</h3>
                <p className="text-13 text-lowGray font-Rubik">{data.book_author}</p>
                <p className="text-13 text-lowGray font-Rubik">{data.year}</p>
              </div>    
          </div>
        ))}
      </div>
    </>
  )
}
