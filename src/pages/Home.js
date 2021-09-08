import React, { useState } from 'react';
import { GridCard, ListCard } from '../components/cards';
import Header from '../components/Header';
import DetailBook from '../components/modal/DetailBook';
import FilterBook from '../components/modal/FilterBook';
import Sidebar  from '../components/Sidebar';

const Home = () => {
  const [ bookDrawer, setBookDrawer ] = useState(false);
  const [ bookDetails, setBookDetails ] = useState(false); 
  const [active, setActive] = useState(0);
  const [ activeTemplateBtn, setActiveTemplateBtn ] = useState(0);
  const [ formatBtn, setFormatBtn ] = useState(0);
  const [currentBook, setCurrentBook] = useState([]);
  const [ filter, setFilter ] = useState(false);
  const [ listPage, setListPage ] = useState(false);
  const [ gridPage, setGridPage ] = useState(true);

  const getBook = (book) => setCurrentBook(book)

  const toggleCard = (data) => {
    setBookDrawer((open) => !open)
    setBookDetails(data)
  };

  const toggleFilter = () => {
    setFilter((open) => !open)
  }

  const gridHandler = (e) => {
    setFilter((open) => !open)
    if(e === 0) setGridPage(true);

    if(e === 1){
      setListPage(true)
      setGridPage(false)
    }
  }

  return(
    <React.Fragment>
      { bookDrawer && (
        <DetailBook 
        cancelModal={toggleCard} 
        bookDetails={bookDetails} 
        />)
      }
      <Header 
        currentBook={currentBook} 
        active={active}
        toggleFilter={toggleFilter}
      />
      {
        filter && (
          <FilterBook
            gridHandler={gridHandler}
            activeTemplateBtn={activeTemplateBtn}
            setActiveTemplateBtn={setActiveTemplateBtn}
            formatBtn={formatBtn}
            setFormatBtn={setFormatBtn}
            setFilter={setFilter}
          />
        )
      }
      <Sidebar 
        setActive={setActive} 
        getBook={getBook} 
        active={active} 
      />
      { gridPage && (
        <GridCard 
          active={active} 
          toggleCard={toggleCard} 
        />
      )} 
      {
        listPage && (
          <ListCard 
            active={active} 
            toggleCard={toggleCard} 
          />
        )
      }
    </React.Fragment>
  )
}

export default Home;