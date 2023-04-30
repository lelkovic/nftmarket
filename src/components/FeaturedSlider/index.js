import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Container from "../Container";
import { MyTimer } from "../UI/Timer";
import featuredBlock from "../../assets/images/featuredBlock.png";
import avatar from "../../assets/images/avatar.png";
import user from "../../assets/images/user.png";
import { fetchData } from "../../helpers/index";
import styles from "./styles.module.scss";

export const FeaturedSlider = () => {
    const [data, setData] = useState(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
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
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>

            <div className={styles.featuredSlider}>
                <div className={styles.featuredSlider__left}>
                    <img src={featuredBlock} alt="featuredblock" />
                </div>
                <div className={styles.featuredSlider__right}>
                    <h2 className={styles.featuredSlider__title}>Marco carrillo®</h2>

                    <div className={styles.featuredSlider__subInfo}>
                        <div>
                            <img className={styles.featuredSlider__avatar} src={avatar} alt="Avatar" />
                            <div>
                                <p className={styles.featuredSlider__subInfoTitle}>Creator</p>
                                <p className={styles.featuredSlider__subInfoText}>Enrico Cole</p>
                            </div>
                        </div>
                        <div>
                            <img className={styles.featuredSlider__avataruser} src={user} alt="userloading"></img>
                            <div>
                                <p className={styles.featuredSlider__subInfoTitle}>Instant Price</p>
                                <p className={styles.featuredSlider__subInfoText}>3.5 ETH</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.featuredSlider__info}>
                        <p className={styles.featuredSlider__bidTitle}>Current Bid</p>
                        <p className={styles.featuredSlider__bidPrice}>1.00 ETH</p>
                        <p className={styles.featuredSlider__usdPrice}>
                            {data ? "$" + data.market_data.current_price.usd : "Loading.."}
                        </p>
                        <p className={styles.featuredSlider__countdown}>Auction ending in</p>
                        <MyTimer />
                    </div>

                    <a href="#" className={styles.featuredSlider__buttontop}>
                        Place a bid
                    </a>
                    <a href="#" className={styles.featuredSlider__buttonbot}>
                        View item
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default FeaturedSlider;
