import { useState } from 'react';
import handImg from '../../../assets/hand.png';
import close from '../../../assets/Group 5.svg';

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='menu-toggle' onClick={() => setOpen(true)}>
        <img src={handImg} alt='' />
        Hi I'm Ayush
      </div>
      <div className={`menu ${open ? 'show' : ''}`}>
        <div className='menu-list'>
          <a href='/' className='menu-item'>
            Home
          </a>
          <a href='#about' className='menu-item'>
            About
          </a>
          <a href='#recent-work' className='menu-item'>
            Work
          </a>
          <a href='/contact' className='menu-item'>
            Contact
          </a>
        </div>
        <button onClick={() => setOpen(false)} className='menu-close'>
          <img src={close} alt='' />
        </button>
      </div>
    </>
  );
};

export default Menu;
