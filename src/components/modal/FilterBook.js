import React from 'react';
import { templateBtn, templateFormat } from './data/template';

const FilterBook = ({
  gridHandler,
  setActiveTemplateBtn,
  activeTemplateBtn,
  setFormatBtn,
  formatBtn,
}) => {

  return ( 
    <div className="w-268 h-331 drop-shadow-sm bg-white absolute right-7 px-6 py-4 mt-36 rounded-md z-40 cursor-pointer">
      <div className="font-Rubik">
        <p className="font-Rubik text-14 font-medium">Display Options</p>
        <div className="flex my-2">
          {
            templateBtn?.map((btn, index) => (
              <button key={index} className="mr-4" 
              onClick={() => {
                gridHandler(index)
                setActiveTemplateBtn(index)
              }}>
                <div className="w-40 h-40 flex justify-center items-center shadow rounded-full" 
                style={{ backgroundColor: `${index === activeTemplateBtn ? '#F8FAFD' : '#fff' }`}}>
                  {btn.img}
                </div>
                <div className="text-11 text-center mt-1">
                  {btn.title}
                </div>
              </button>
            ))
          }
        </div>
      </div>
      <div className="mt-3">
        <p className="font-Rubik text-14 font-medium">Sort By</p>
          {
            templateFormat?.map((format, index) => (
              <div key={index} 
                onClick={() => setFormatBtn(index)}
                className="flex h-45 w-full justify-between px-4 rounded-full font-Rubik text-14 mt-3 items-center" 
                style={{ backgroundColor: `${index === formatBtn ? '#F8FAFD' : ''}`}}>
                <div style={{color: `${index === formatBtn ? '#0D75FF' : '#757881' }`}}>
                  {format.title}
                </div>
                <div>{format.icon}</div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default FilterBook;
