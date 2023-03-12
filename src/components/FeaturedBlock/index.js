import React from "react";
import Container from "../Container";
import featuredBlock from "../../assets/images/featuredBlock.png";
import styles from "./styles.module.scss";
import avatar from "../../assets/images/avatar.png";
import user from "../../assets/images/user.png";

export const FeaturedBlock = () => {
    // let url = "https://api.coingecko.com/api/v3/coins/ethereum";
    // let response = await fetch(url);

    // let commits = await response.json();
    return (
        <Container>
            <div className={styles.featuredBlock}>
                <div className={styles.featuredBlock__left}>
                    <img src={featuredBlock} alt="featuredblock" />
                </div>
                <div className={styles.featuredBlock__right}>
                    <h2 className={styles.featuredBlock__title}>Marco carrillo®</h2>

                    <div className={styles.featuredBlock__subInfo}>
                        <div>
                            <img src={avatar} alt="Avatar" />
                            <div>
                                <p className={styles.featuredBlock__subInfoTitle}>Creator</p>
                                <p className={styles.featuredBlock__subInfoText}>Enrico Cole</p>
                            </div>
                        </div>

                        <div>
                            <img src={user} alt="userloading"></img>
                            <div>
                                <p className={styles.featuredBlock__subInfoTitle}>Instant Price</p>
                                <p className={styles.featuredBlock__subInfoText}>3.5 ETH</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.featuredBlock__info}>
                        <p className={styles.featuredBlock__bidTitle}>Current Bid</p>
                        <p className={styles.featuredBlock__bidPrice}>1.00 ETH</p>
                        {/* <p className={styles.featuredBlock__usdPrice}>${commits.market_data.current_price.usd}</p> */}
                    </div>

                    <a href="#" className={styles.featuredBlock__buttontop}>
                        Place a bid
                    </a>
                    <a href="#" className={styles.featuredBlock__buttonbot}>
                        View item
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default FeaturedBlock;
