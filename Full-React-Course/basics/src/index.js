import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// Setup Vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL._AC_UL200_SR200,200_.jpg",
    title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/91PpDVWjhLL._AC_UL200_SR200,200_.jpg",
    title: "Will, The best memoir I've ever read",
    author: "Will Smith",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/71rDThWVwES._AC_UL200_SR200,200_.jpg",
    title: "The Stranger in the Lifeboat",
    author: "Mitch Albom",
  }
]

// const names = ['john', 'peter', 'susan']
// const newName = names.map((name)=>{
//   return <h1>{name}</h1>
// })

function BookList(){
  return (
    <section className='booklist'>
      {books.map((book)=>{
        return (
          <Book key={book.id} book={book}></Book>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  const {img, title, author} = props.book;
  return (
    <article className='book'>
      <img src={img} alt="Book Image"/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList/>, document.getElementById('root'));