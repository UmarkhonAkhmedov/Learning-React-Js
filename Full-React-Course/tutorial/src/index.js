import React from 'react';
import ReactDom from 'react-dom';

// Stateless functional component
// Always return JSX

// function Greeting(){
//   return (
//   <div className=''>
//     <h3>helllo people</h3>
//     <ul>
//       <li>
//         <a href="www.google.com">hello world</a>
//       </li>
//     </ul>
//   </div>
//   )
// }


// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'));
// }

///////////////////////////////////////////////////////////
// // Nested Components, React Tools
// function Greeting(){
//   return (
//     <div>
//       <Person/>
//       <Message/>
//     </div>
//   );
// }

// const Person = () => <h2>Umarkhon</h2>
// const Message = () => {
//   return <p>This is my message</p>;
// }

// ReactDom.render(<Greeting/>, document.getElementById('root'));


///////////////////////////////////////////////////////////
// Mini Book Project

function BookList(){
  return ( 
  <section>
    <Book/>
  </section>
  );
}

const Book = () => {
  return (
  <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
  );
}

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/81z6xJd6mrS._AC_UL200_SR200,200_.jpg" alt="Bestselling Book" />
)
const Title = () => <h1>Dune (Dune Chronicles, Book 1)</h1>
const Author = () => <h4>Frank Herbert</h4>


ReactDom.render(<BookList/>, document.getElementById('root'));