import React from "react";
import Container from "../Container";
import styles from "./styles.module.scss";

export const TitleBlock = () => {
    return (
        <Container>
            <div className={styles.titleBlock}>
                <h3 className={styles.titleBlock__subtitle}>Create, explore, & collect digital art NFTs.</h3>
                <h2 className={styles.titleBlock__title}>The new creative economy.</h2>
                <button className={styles.titleBlock__button}>Start your search</button>
            </div>
        </Container>
    );
};

export default TitleBlock;
