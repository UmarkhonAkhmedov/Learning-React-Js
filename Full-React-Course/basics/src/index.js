import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function BookList(){
  return (
    <section className='booklist'>
      <Book/>
    </section>
  )
}

const Book = () => {
  const title = 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones'

  return (
    <article className='book'>
      <img src="https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL._AC_UL200_SR200,200_.jpg" alt="Atomic Habits Book"/>
      <h1>{title}</h1>
      <h4>James Clear</h4>
    </article>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'));