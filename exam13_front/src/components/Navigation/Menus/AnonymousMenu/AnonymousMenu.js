import { NavLink } from 'react-router-dom'

function AnonymousMenu() {
  return (
    <nav className='header_nav_menu'>
      <NavLink to='/sign-up' className='header_link'>Регистрация</NavLink>
      <NavLink to='/log-in' className='header_link'>Вход</NavLink>
    </nav>
  );
}

export default AnonymousMenu;
