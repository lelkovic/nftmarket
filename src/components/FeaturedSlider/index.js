import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Container from "../Container";
import { MyTimer } from "../UI/Timer";
import avatar from "../../assets/images/avatar.png";
import user from "../../assets/images/user.png";
import sliderDataJson from "./sliderData.json";
import { fetchData } from "../../helpers/index";
import styles from "./styles.module.scss";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={`${styles.featuredSlider__arrowNext} ${className}`} onClick={onClick}>
            <i className="icon-vector-Stroke" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={`${styles.featuredSlider__arrowPrev} ${className}`} onClick={onClick}>
            <i className="icon-vector-Stroke" />
        </div>
    );
}

export const FeaturedSlider = () => {
    const [data, setData] = useState(null);
    const [sliderData, setSliderData] = useState(null);
    const settings = {
        dots: false,
        infinite: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const renderSliderItems = () => {
        return sliderData.map((item, key) => (
            <div key={key}>
                <div className={styles.featuredSlider}>
                    <div className={styles.featuredSlider__left}>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className={styles.featuredSlider__right}>
                        <h2 className={styles.featuredSlider__title}>{item.title}</h2>

                        <div className={styles.featuredSlider__subInfo}>
                            <div>
                                <img className={styles.featuredSlider__avatar} src={avatar} alt="Avatar" />
                                <div>
                                    <p className={styles.featuredSlider__subInfoTitle}>Creator</p>
                                    <p className={styles.featuredSlider__subInfoText}>{item.creator}</p>
                                </div>
                            </div>
                            <div>
                                <img className={styles.featuredSlider__avataruser} src={user} alt="userloading"></img>
                                <div>
                                    <p className={styles.featuredSlider__subInfoTitle}>Instant Price</p>
                                    <p className={styles.featuredSlider__subInfoText}>{item.instantPrice} ETH</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.featuredSlider__info}>
                            <p className={styles.featuredSlider__bidTitle}>Current Bid</p>
                            <p className={styles.featuredSlider__bidPrice}>{item.currentBid} ETH</p>
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
            </div>
        ));
    };

    useEffect(() => {
        const getData = async () => {
            const url = "https://api.coingecko.com/api/v3/coins/ethereum";
            const result = await fetchData(url);
            setData(result);

            // const urlSlider = "https://market-back.herokuapp.com/featuredSlider";
            // const resultSlider = await fetchData(urlSlider);
            const resultSlider = sliderDataJson.slides;
            setSliderData(resultSlider);
        };

        getData();
    }, []);

    return (
        <Container>
            <Slider {...settings}>{sliderData && renderSliderItems()}</Slider>
        </Container>
    );
};

export default FeaturedSlider;
