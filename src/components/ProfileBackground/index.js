import React from "react";
import styles from "./styles.module.scss";
import Background from "../../assets/images/profilebackground.png";
import { Container } from "../Container";

export const ProfileBackground = () => {
    return (
        <div className={styles.profile}>
            <img className={styles.profile__background} src={Background} alt="Profile Background" />

            <Container className={styles.profile__container}>
                <button className={styles.profile__button}>Edit cover photo</button>
                <button className={styles.profile__button}>Edit profile</button>
            </Container>
        </div>
    );
};
export default ProfileBackground;
