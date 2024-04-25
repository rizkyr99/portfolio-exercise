import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <Link className='logo' to='/'>
          @Ayush Barnwal
        </Link>
        <div className='nav-menu'>
          <a href='#about' className='nav-item'>
            About
          </a>
          <a href='#recent-work' className='nav-item'>
            Work
          </a>
          <Link to='/contact' className='nav-item'>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
