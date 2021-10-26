import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

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

// function BookList(){
//   return ( 
//   <section className="booklist">
//     <Book/>
//   </section>
//   );
// }

// const Book = () => {
//   return (
//   <article className="book">
//     <Image/>
//     <Title/>
//     <Author/>
//   </article>
//   );
// }

// const Image = () => (
//   <img src="https://images-na.ssl-images-amazon.com/images/I/81z6xJd6mrS._AC_UL200_SR200,200_.jpg" alt="Bestselling Book" />
// )
// const Title = () => <h1>Dune (Dune Chronicles, Book 1)</h1>
// // const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Frank Herbert</h4>
// const Author = () => <h4>Frank Herbert</h4>

// const firstBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/71BMsKPqsIS._AC_UL200_SR200,200_.jpg",
//   title:'I love you to the Moon and Back',
//   author: 'Amelia Hepworth'
// }

// const secondBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/81z6xJd6mrS._AC_UL200_SR200,200_.jpg",
//   title:'Big Shot Diary of a Wimpy Kid Book 16',
//   author: 'Jeff Kinney'
// }

// function BookList(){
//   return (
//     <section className='booklist'>
//       <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus deleniti
//           inventore accusantium laboriosam magnam cum? Facilis, molestias nam. Fuga.
//         </p>
//       </Book>
//       <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}></Book>
//     </section>
//   );
// }
// const Book = ({img, title, author, children}) => {
//   // const {img, title, author} = props;
//   return (
//     <article className='book'>   
//       <img src={img} alt='Book'/>
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {children}
//     </article>
//     // <article className='book'>   
//     //   <img src={props.img} alt='Book'/>
//     //   <h1>{props.title}</h1>
//     //   <h4>{props.author}</h4>
//     // </article>
//   )
// }

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/71BMsKPqsIS._AC_UL200_SR200,200_.jpg",
    title:'I love you to the Moon and Back',
    author: 'Amelia Hepworth'
  }, 
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81z6xJd6mrS._AC_UL200_SR200,200_.jpg",
    title:'Big Shot Diary of a Wimpy Kid Book 16',
    author: 'Jeff Kinney'
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/910N36lR%2BkL._AC_UL200_SR200,200_.jpg",
    title:'Dune (Dune Chronicles, Book 1)',
    author: 'Frank Herbert'
  }
];


function BookList(){
  return (
    <section className='booklist'>
        {books.map((book)=>{
          return (
            <Book key={book.id} book={book}></Book>
          );
        })}
    </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props.book;
  return (
    <article className='book'>   
      <img src={img} alt='Book'/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}



ReactDom.render(<BookList/>, document.getElementById('root'));