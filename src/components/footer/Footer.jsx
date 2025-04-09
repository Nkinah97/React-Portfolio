import "./style.css";

import instagram from './../../img/icons/instagram.svg';

import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://www.instagram.com/n._.kinah" target="_blank" rel="noreferrer">
                                <img src={instagram} alt="Instagram" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://github.com/Nkinah97/" target="_blank" rel="noreferrer">
                                <img src={gitHub} alt="GitHub" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.linkedin.com/in/nazar-kinashchuk-bb111b2b5" target="_blank" rel="noreferrer">
                                <img src={linkedIn} alt="LinkedIn" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 