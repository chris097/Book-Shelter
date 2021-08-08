import React, { useState } from 'react';
import { Card } from '../components/Card';
import Header from '../components/Header';
import DetailBook from '../components/modal/DetailBook';
import Sidebar  from '../components/Sidebar';

const Home = () => {
  const [ book, setBook ] = useState(0);
  const [ bookInfo, setBookInfo ] = useState(false);
  const [ data, setData ] = useState(false)

  const bookDetails = (data) => setBook(data);

  const toggleCard = (data) => {
    setBookInfo((open) => !open)
    setData(data)
  };

  return(
    <React.Fragment>
      { bookInfo && <DetailBook cancelModal={toggleCard} data={data} />}
      <Header book={book} />
      <Sidebar bookDetails={bookDetails} />
      <Card book={book} toggleCard={toggleCard} />
    </React.Fragment>
  )
}

export default Home;