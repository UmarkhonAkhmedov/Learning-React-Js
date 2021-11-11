import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// Setup Vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL._AC_UL200_SR200,200_.jpg",
  title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  author: "James Clear",
}
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91PpDVWjhLL._AC_UL200_SR200,200_.jpg",
  title: "Will, The best memoir I've ever read.",
  author: " Will Smith",
}

function BookList(){
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        <p>One of the most dynamic and globally recognized entertainment forces of our time opens up fully about his life, in a brave and inspiring book that traces his learning curve to a place where outer success, inner happiness, and human connection are aligned. Along the way.</p>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}>
        <p>“Will Smith isn't holding back in his bravely inspiring new memoir . . . An ultimately heartwarming read, Will provides a humane glimpse of the man behind the actor, producer and musician, as he bares all his insecurities and trauma." - USA Today. Will tells the story in full of one of the most amazing rides through the worlds of music and film that anyone has ever had.</p>
      </Book>
    </section>
  )
}

const Book = (props) => {
  const {img, title, author, children} = props;
  return (
    <article className='book'>
      <img src={img} alt="Book Image"/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'));