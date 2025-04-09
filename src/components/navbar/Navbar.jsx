// Імпорт необхідних компонентів
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';

// Компонент навігаційної панелі
const Navbar = () => {
    // Стилі для активного та звичайного посилання
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    {/* Логотип */}
                    <NavLink to="/" className="logo">
                        <strong>Nazarii Kinashchuk</strong> 
                    </NavLink>

                    {/* Кнопка темної теми */}
                    <BtnDarkMode />

                    {/* Навігаційне меню */}
                    <ul className="nav-list">
                        {/* Домашня сторінка */}
                        <li className="nav-list__item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                            >
                                Home
                            </NavLink>
                        </li>

                        {/* Сторінка проектів */}
                        <li className="nav-list__item">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                            >
                                Projects
                            </NavLink>
                        </li>

                        {/* Сторінка контактів */}
                        <li className="nav-list__item">
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 