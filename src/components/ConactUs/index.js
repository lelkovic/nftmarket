import React from "react";
import Container from "../Container";
import contactUs from "../../assets/images/contactUs.png";
import styles from "./styles.module.scss";

export const ContactUs = () => {
    return (
        <div className={styles.contactUs__wrap}>
            <Container>
                <div className={styles.contactUs}>
                    <div>
                        <p className={styles.contactUs__pretitle}>Save your time with Stacks</p>
                        <h2> Earn free crypto with Crypter</h2>
                        <p className={styles.contactUs__description}>A creative agency that lead and inspire</p>
                        <div>
                            <a className={styles.contactUs__buttonLeft} href="#">
                                Earn now
                            </a>
                            <a className={styles.contactUs__buttonRight} href="#">
                                Discover more
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src={contactUs} alt="ContactUs img" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;
