import React from "react";
import Container from "../Container";
import Logo from "../../assets/images/logo.png";
import styles from "./styles.module.scss";

export const Header = () => {
    return (
        <div className={styles.header__wrap}>
            <Container>
                <header className={styles.header}>
                    <div>
                        <img src={Logo} alt="logo" />
                        <div className={styles.header__sep}></div>
                        <nav>
                            <a href="#Discover">Discover</a>
                            <a href="#How-it-work">How it work</a>
                        </nav>
                    </div>
                    <div>
                        <div className={styles.header__inputWrap}>
                            <input type="text" placeholder="Search" />
                        </div>
                        <i className="Notify" />
                        <button className={styles.header__bbtn}>Upload</button>
                        <button className={styles.header__wbtn}>Connect Wallet</button>
                    </div>
                </header>
            </Container>
        </div>
    );
};

export default Header;
