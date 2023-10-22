import React from "react";
import ProfileBackground from "../../components/ProfileBackground";
import Container from "../../components/Container";
import ProfileCard from "../../components/ProfileCard";
import ProfileGallery from "../../components/ProfileGallery";
import styles from "./styles.module.scss";

export const ProfilePage = () => {
    return (
        <>
            <ProfileBackground />
            <Container className={styles.profile__content}>
                <ProfileCard />
                <ProfileGallery />
            </Container>
        </>
    );
};
