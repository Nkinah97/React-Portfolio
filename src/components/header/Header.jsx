import "./style.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, I'm <em>Nazarii Kinashchuk</em></strong>
                    <br />frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a 
                    href={process.env.PUBLIC_URL + "/Nazar_Kinashchuk_2025.pdf"}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download CV
                </a>
            </div>
        </header>
    );
}

export default Header; 