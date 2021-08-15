import React, { useState } from 'react';
import { Card } from '../components/Card';
import Header from '../components/Header';
import DetailBook from '../components/modal/DetailBook';
import Sidebar  from '../components/Sidebar';

const Home = () => {
  const [ bookDrawer, setBookDrawer ] = useState(false);
  const [ bookDetails, setBookDetails ] = useState(false); 
  const [active, setActive] = useState(0)
  const [currentBook, setCurrentBook] = useState([])

  const getBook = (book) => setCurrentBook(book)

  const toggleCard = (data) => {
    setBookDrawer((open) => !open)
    setBookDetails(data)
  };

  return(
    <React.Fragment>
      { bookDrawer && <DetailBook cancelModal={toggleCard} bookDetails={bookDetails} />}
      <Header currentBook={currentBook} active={active} />
      <Sidebar setActive={setActive} getBook={getBook} active={active} />
      {<Card active={active} toggleCard={toggleCard} /> }
    </React.Fragment>
  )
}

export default Home;