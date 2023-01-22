import React from "react";
import Logo from "../../assets/images/logo.svg";
import styles from "./styles.module.scss";

export const Header = () => { 
    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo" />
            <div className={styles.header__sep}></div>
            <nav>
                <a href="#Discover">
                    Discover
                </a>
                <a href="#How-it-work">
                    How it work
                </a>
                <input type="text" placeholder="Search" />
                <button className={styles.header__bbtn}>
                    Upload
                </button>
                <button className={styles.header__wbtn}>
                    Connect Wallet
                </button>
            </nav>
        </header>
    );
};

export default Header;