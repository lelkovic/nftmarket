import React from "react";
import Container from "../Container";
import featuredBlock from "../../assets/images/featuredBlock.png";
import styles from "./styles.module.scss";
import avatar from "../../assets/images/avatar.png"
import user from "../../assets/images/user.png"

export const FeaturedBlock = () => {
    return (
        <Container>
            <div className={styles.featuredBlock}> 
                <h2 className={styles.featuredBlock__title}>Marco carrillo®</h2>
            </div>
            <div>
                <img src={featuredBlock} alt="featuredblock" />
            </div>

            <div className={styles.featuredBlock__creatortitle}>
                Creator

            </div>

            <div className={styles.featuredBlock__creatorsubtitle}>Enrico Cole</div>
            <img src={avatar} alt="Avatar" />

            <div className={styles.featuredBlock__usertitle}>Instant price</div>

            <div className={styles.featuredBlock__usersubtitle}>3.5 ETH</div>
            <img src={user} alt="userloading"></img>

            <a className={styles.featuredBlock__buttontop}>Place a bid</a>
                

            <a className={styles.featuredBlock__buttonbot}>View item</a>
        </Container>
        
    );
};

export default FeaturedBlock;
