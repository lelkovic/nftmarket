import React from "react";
import Container from "../Container";
import Logo from "../../assets/images/logo.png";
import styles from "./styles.module.scss";

export const TitleBlock = () => {
    return (
        <Container>
            <div className={styles.titleBlock}>
                <h3>Create, explore, & collect digital art NFTs.</h3>
                <h2>The new creative economy.</h2>
                <button>Start your search</button>
            </div>
        </Container>
    );
};

export default TitleBlock;
