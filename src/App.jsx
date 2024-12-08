import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import BrowseBooks from './components/BrowseBooks'
import BookDetails from './components/BookDetails'
import AddBook from './components/AddBook'
import NotFound from './components/NotFound'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux'


const popularBooks = [
  {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel about the American dream and the decadence of the Jazz Age.",
      rating: 4.4,
      category: "Fiction",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a7350c9186433.560c9f1d670e4.jpg",
  },
  {
      id: 2,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
      rating: 4.2,
      category: "Fiction",
      image: "https://i.pinimg.com/control/564x/c5/bb/9e/c5bb9e4f276d8026eeaf6374df67f5a7.jpg" 
  },
  {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel about the serious issues of rape and racial inequality narrated by a young girl.",
      rating: 4.3,
      category: "Fiction",
      image: "https://i.pinimg.com/736x/bd/5f/b5/bd5fb566c8dbe0c3d1d51fd9fb9e8842.jpg" 
  },
  {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description: "A story about teenage angst and alienation.",
      rating: 3.8,
      category: "Fiction",
      image: "https://i.pinimg.com/control/564x/4b/be/9c/4bbe9c695bd2c2005847108120df0612.jpg" 
  },
  {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "A romantic novel that critiques the British landed gentry at the end of the 18th century.",
      rating: 4.6,
      category: "Fiction",
      image: "https://i.pinimg.com/control/564x/00/a9/f6/00a9f6438990cb441205e351f5d81f3e.jpg" 
  },
  {
      id: 6,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description: "An exploration of the history of humankind from the Stone Age to the present.",
      rating: 4.5,
      category: "Non-Fiction",
      image: "https://i.pinimg.com/736x/7e/a0/d9/7ea0d95ec9e62f6abc88917ac556a891.jpg" 
  },
  {
      id: 7,
      title: "Educated",
      author: "Tara Westover",
      description: "A memoir about a woman's quest for knowledge, escaping from a strict and abusive household.",
      rating: 4.7,
      category: "Non-Fiction",
      image: "https://i.pinimg.com/control/564x/e5/94/5c/e5945cc99bb9abb55fbcbb099e7d414a.jpg" 
  },
  {
      id: 8,
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      description: "The story of Henrietta Lacks and her immortal cell line that revolutionized medical research.",
      rating: 4.4,
      category: "Non-Fiction",
      image: "https://i.pinimg.com/564x/27/dd/20/27dd207ed00f7f16042bdab82977d887.jpg" 
  },
  {
      id: 9,
      title: "Dune",
      author: "Frank Herbert",
      description: "A science fiction novel about politics, religion, and ecology on the desert planet Arrakis.",
      rating: 4.5,
      category: "Sci-Fi",
      image: "https://i.pinimg.com/control/564x/3a/c9/6d/3ac96daf6f926e16c6d09e63ace1a46b.jpg"  
  },
  {
      id: 10,
      title: "The Martian",
      author: "Andy Weir",
      description: "A gripping tale of an astronaut stranded on Mars, struggling to survive.",
      rating: 4.6,
      category: "Sci-Fi",
      image: "https://i.pinimg.com/control/564x/e5/52/02/e5520252b03ada02c6eb3f004a38b135.jpg"  
  },
];




function App() {
  const [viewedBook, setViewedBook] = useState(popularBooks[0]);

  const bookList = useSelector((store) => store.book.items)
  console.log(bookList);
  

  return (
    // <Router>
      <Routes>
        {/* <Route path="/" element={<Home popularBooks={popularBooks} setViewedBook={setViewedBook} />} /> */}
        <Route path="/" element={<BrowseBooks setViewedBook={setViewedBook} />} />
        <Route path="/browseBooks" element={<BrowseBooks setViewedBook={setViewedBook} />} />
        <Route path="/browseBooks/:category" element={<BrowseBooks setViewedBook={setViewedBook} />} />
        <Route path="/bookDetails/:id" element={<BookDetails viewedBook={viewedBook} bookList={popularBooks} />} />
        <Route path="/browseBooks/bookDetails/:id" element={<BookDetails bookList={bookList} viewedBook={viewedBook} />} />
        <Route path="/addBook" element={<AddBook bookList={bookList} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    // </Router>
  );
}

export default App
