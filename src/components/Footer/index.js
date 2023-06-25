import React, { useState } from "react";
import Container from "../Container";
import Logo from "../../assets/images/logo.png";
import styles from "./styles.module.scss";

export const Footer = () => {
    const [crypterOpened, setCrypterOpened] = useState(false);
    const [infoOpened, setInfoOpened] = useState(false);

    return (
        <Container className={styles.footer}>
            <div className={styles.footer__top}>
                <div>
                    <img src={Logo} alt="logo" />
                    <h3>The New Creative Economy.</h3>
                </div>
                <nav>
                    <ul className={crypterOpened && styles.footer__menuOpened}>
                        <li onClick={() => setCrypterOpened(!crypterOpened)}>
                            <span>Crypter</span>
                        </li>
                        <li>
                            <a href="#">Discover</a>
                        </li>
                        <li>
                            <a href="/connectWallet">Connect wallet</a>
                        </li>
                        <li>
                            <a href="#">Create item</a>
                        </li>
                    </ul>
                    <ul className={infoOpened && styles.footer__menuOpened}>
                        <li onClick={() => setInfoOpened(!infoOpened)}>
                            <span>Info</span>
                        </li>
                        <li>
                            <a href="#">Download</a>
                        </li>
                        <li>
                            <a href="#">Demos</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.footer__subscribe}>
                    <p className={styles.footer__subscribeTitle}>Join Newsletter</p>
                    <p className={styles.footer__subscribeText}>
                        Subscribe our newsletter to get more free design course and resource
                    </p>
                    <div className={styles.footer__form}>
                        <input type="text" placeholder="Enter your email" />
                        <button>
                            <i className="icon-vector-Stroke" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <p className={styles.footer__copy}>Copyright © 2021 UI8 LLC. All rights reserved</p>
                <p className={styles.footer__cookies}>
                    We use cookies for better service. <span>Accept</span>
                </p>
            </div>
        </Container>
    );
};

export default Footer;
