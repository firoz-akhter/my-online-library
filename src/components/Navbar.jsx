import { Link } from 'react-router-dom';
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/browseBooks">Browse Books</Link></p>
        <p><Link to="/addBook">Add Book</Link></p>
    </nav>
  );
};

export default Navbar;
