import React from "react";
import Container from "../Container";
import featuredBlock from "../../assets/images/featuredBlock.png";
import styles from "./styles.module.scss";

export const FeaturedBlock = () => {
    return (
        <Container>
            <div className={styles.featuredBlock}> 
                <h2 className={styles.featuredBlock__title}>Marco carrillo®</h2>
            </div>
            <div>
                <img src={featuredBlock} alt="featuredblock" />
            </div>
        </Container>
    );
};

export default FeaturedBlock;
