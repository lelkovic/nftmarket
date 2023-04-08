import React, { useState, useEffect } from "react";
import Container from "../Container";
import { MyTimer } from "../UI/Timer";
import featuredBlock from "../../assets/images/featuredBlock.png";
import avatar from "../../assets/images/avatar.png";
import user from "../../assets/images/user.png";
import { fetchData } from "../../helpers/index";
import styles from "./styles.module.scss";

export const FeaturedBlock = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const url = "https://api.coingecko.com/api/v3/coins/ethereum";
            const result = await fetchData(url);
            setData(result);
        };

        getData();
    }, []);
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
                            <img className={styles.featuredBlock__avatar} src={avatar} alt="Avatar" />
                            <div>
                                <p className={styles.featuredBlock__subInfoTitle}>Creator</p>
                                <p className={styles.featuredBlock__subInfoText}>Enrico Cole</p>
                            </div>
                        </div>
                        <div>
                            <img className={styles.featuredBlock__avataruser} src={user} alt="userloading"></img>
                            <div>
                                <p className={styles.featuredBlock__subInfoTitle}>Instant Price</p>
                                <p className={styles.featuredBlock__subInfoText}>3.5 ETH</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.featuredBlock__info}>
                        <p className={styles.featuredBlock__bidTitle}>Current Bid</p>
                        <p className={styles.featuredBlock__bidPrice}>1.00 ETH</p>
                        <p className={styles.featuredBlock__usdPrice}>
                            {data ? "$" + data.market_data.current_price.usd : "Loading.."}
                        </p>
                        <p className={styles.featuredBlock__countdown}>Auction ending in</p>
                        <MyTimer />
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
