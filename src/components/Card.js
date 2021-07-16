import React from 'react'
import { ReactComponent as Image } from '../svgs/image1-svg.svg';

export const Card = ({book}) => {

  const cardDetails = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className=" pt-28 m-lf relative flex flex-wrap mb-10">
        { book.book_category?.map((data, index) => (
          <div key={index} onClick={() => cardDetails(book)} className="w-282 h-369 bg-white rounded-lg mr-2.5 mt-4">
            <div className="w-249 h-238 bg-secondaryBlue mx-auto mt-4 flex justify-center items-center rounded-lg">
              <Image />
              </div>
                <div className="ml-4 mt-4">
                <h3 className="font-Rubik text-18 font-medium">{data.book_subname}</h3>
                <p className="text-13 text-lowGray font-Rubik">{data.book_author}</p>
                <p className="text-13 text-lowGray font-Rubik">{data.year}</p>
              </div>    
          </div>
        ))}
      </div>
    </>
  )
}
