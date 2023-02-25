import React from "react";
import Container from "../Container";
import Logo from "../../assets/images/logo.png";
import styles from "./styles.module.scss";

export const Header = () => {
    return (
        <div className={styles.header__wrap}>
            <Container>
                <header className={styles.header}>
                    <div className={styles.header__left}>
                        <img src={Logo} alt="logo" />
                        <div className={styles.header__sep}></div>
                        <nav>
                            <a href="#Discover">Discover</a>
                            <a href="#How-it-work">How it work</a>
                        </nav>
                        <button onClick={() => null}>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className={styles.header__right}>
                        <div className={styles.header__inputWrap}>
                            <input type="text" placeholder="Search" />
                        </div>
                        <i className="icon-Notify" />
                        <button className={styles.header__bbtn}>Upload</button>
                        <button className={styles.header__wbtn}>Connect Wallet</button>
                    </div>
                </header>
            </Container>
        </div>
    );
};

export default Header;
