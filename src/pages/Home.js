import React, { useState } from 'react';
import { Card } from '../components/Card';
import Header from '../components/Header';
import Sidebar  from '../components/Sidebar';

const Home = () => {
  const [ book, setBook ] = useState([])

  const bookDetails = (data) => {
    setBook(data)
    console.log(data)
  }
  return(
    <React.Fragment>
      <Header book={book} />
      <Sidebar bookDetails={bookDetails} />
      <Card book={book} />
    </React.Fragment>
  )
}

export default Home;