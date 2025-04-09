import "./style.css";
import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        const handleDownload = () => {
            window.open("https://nkinah97.github.io/React-Portfolio/Nazar-Kinashchuk.pdf", "_blank");
        };

        const downloadBtn = document.querySelector(".btn");
        if (downloadBtn) {
            downloadBtn.addEventListener("click", handleDownload);
            return () => {
                downloadBtn.removeEventListener("click", handleDownload);
            };
        }
    }, []);

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
                    href="/React-Portfolio/Nazar-Kinashchuk.pdf"
                    className="btn"
                    download="Nazar-Kinashchuk.pdf"
                >
                    Download CV
                </a>
            </div>
        </header>
    );
}

export default Header; 