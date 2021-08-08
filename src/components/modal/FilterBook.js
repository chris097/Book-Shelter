import React from 'react';
import { ReactComponent as GridIcon } from '../../svgs/grid-icon.svg';
import { ReactComponent as ListIcon } from '../../svgs/list-icon.svg';
import { ReactComponent as Arrow } from '../../svgs/arrow-down.svg';

const FilterBook = () => {
  return (
    <div className="w-268 h-331 drop-shadow-sm bg-white absolute right-7 px-6 py-4 mt-36 rounded-md z-40">
      <div className="font-Rubik">
        <p className="font-Rubik text-14 font-medium">Display Options</p>
        <div className="flex my-2">
          <div>
            <div className="w-40 h-40 flex justify-center items-center shadow bg-white rounded-full">
              <GridIcon />
            </div>
            <div className="text-11 text-center mt-1">Grid</div>
          </div>
          <div>
            <div className="w-40 h-40 flex justify-center items-center ml-3 shadow bg-white rounded-full">
            <ListIcon />
            </div>
            <div className="text-11 text-center mt-1 ml-3">List</div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <p className="font-Rubik text-14 font-medium">Sort By</p>
        <div className="flex h-45 w-full justify-between px-4 rounded-full font-Rubik text-14 mt-3 items-center bg-secondaryBlue">
          <div className="text-primaryBlue">Alphabetical Order</div>
          <div className=""><Arrow /></div>
        </div>
        <div className="flex h-45 w-full justify-between px-4 rounded-full font-Rubik text-14 mt-3 items-center">
          <div>Release Year</div>
          <div className=""><Arrow /></div>
        </div>
        <div className="flex h-45 w-full justify-between px-4 rounded-full font-Rubik text-14 mt-3 items-center">
          <div>Country</div>
          <div className=""><Arrow /></div>
        </div>
      </div>
    </div>
  )
}

export default FilterBook;
