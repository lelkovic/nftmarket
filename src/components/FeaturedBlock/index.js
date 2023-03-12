import React from "react";
import Container from "../Container";
import featuredBlock from "../../assets/images/featuredBlock.png";
import styles from "./styles.module.scss";
import avatar from "../../assets/images/avatar.png";
import user from "../../assets/images/user.png";

export const FeaturedBlock = () => {
    return (
        <Container>
            <div className={styles.featuredBlock}>
                <div className={styles.featuredBlock__left}>
                    <img src={featuredBlock} alt="featuredblock" />
                </div>
                <div className={styles.featuredBlock__right}>
                    <h2 className={styles.featuredBlock__title}>Marco carrillo®</h2>

                    <div classname={styles.featuredBlock__subInfo}>
                        <div className={styles.featuredBlock__creator}>
                            <img src={avatar} alt="Avatar" />
                            <div>
                                <p className={styles.featuredBlock__subInfoTitle}>Creator</p>
                                <p className={styles.featuredBlock__subInfoText}>Enrico Cole</p>
                            </div>
                        </div>

                        <div className={styles.featuredBlock__instantPrice}>
                            <img src={user} alt="userloading"></img>
                            <div>
                                <p className={styles.featuredBlock__subInfoTitle}>Instant Price</p>
                                <p className={styles.featuredBlock__subInfoText}>3.5 ETH</p>
                            </div>
                        </div>
                    </div>

                    <a className={styles.featuredBlock__buttontop}>Place a bid</a>
                    <a className={styles.featuredBlock__buttonbot}>View item</a>
                </div>
            </div>
        </Container>
    );
};

export default FeaturedBlock;
