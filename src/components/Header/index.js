import React, { useState } from "react";
import Container from "../Container";
import Logo from "../../assets/images/logo.png";
import styles from "./styles.module.scss";

export const Header = () => {
    const [isMobileMenu, setisMobileMenu] = useState(false);
    return (
        <div className={styles.header__wrap}>
            <Container>
                <header className={styles.header}>
                    <div className={styles.header__left}>
                        <a href="/">
                            <img src={Logo} alt="logo" />
                        </a>
                        <div className={styles.header__sep}></div>
                        <nav>
                            <a href="#Discover">Discover</a>
                            <a href="#How-it-work">How it work</a>
                        </nav>
                        <button
                            className={`${styles.header__burger} ${isMobileMenu && styles.header__burgerOpen}`}
                            onClick={() => setisMobileMenu(!isMobileMenu)}
                        >
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
                        <a href="/connectWallet" className={styles.header__wbtn}>
                            Connect Wallet
                        </a>
                    </div>
                </header>
            </Container>
            {isMobileMenu && (
                <div className={styles.mobileMenu}>
                    <nav>
                        <a href="#Discover">Discover</a>
                        <a href="#How-it-work">How it work</a>
                    </nav>
                    <div className={styles.mobileMenu__bottom}>
                        <button className={styles.mobileMenu__walletButton}>Connect Wallet</button>
                        <button className={styles.mobileMenu__search}>
                            <i className="icon-Shape" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
