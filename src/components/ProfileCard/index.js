import React from "react";
import styles from "./styles.module.scss";
import bigAvatar from "../../assets/images/bigavatar.png";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import coins from "../../assets/images/Coins.svg";
import dots from "../../assets/images/Dots.svg";
import share from "../../assets/images/Share.svg";

export const ProfileCard = () => {
    return (
        <div className={styles.profileCard}>
            <img src={bigAvatar} alt="bigAvatar" className={styles.profileCard__img} />
            <h2>Enrico Cole</h2>
            <button className={styles.profileCard__address}>
                0xc4c16a645...b21a <img src={coins} alt="coins" />
            </button>
            <p>A wholesome farm owner in Montana. Upcoming gallery solo show in Germany</p>
            <a>https://ui8.net</a>
            <div className={styles.profileCard__options}>
                <button className={styles.profileCard__primaryButton}>Follow</button>
                <button className={styles.profileCard__secondaryButton}>
                    <img src={share} alt="share" />
                </button>
                <button className={styles.profileCard__secondaryButton}>
                    <img src={dots} alt="dots" />
                </button>
            </div>
            <div className={styles.profileCard__socialWrap}>
                <button>
                    <img src={twitter} alt="twitter" />
                </button>
                <button>
                    <img src={instagram} alt="instagram" />
                </button>
                <button>
                    <img src={facebook} alt="facebook" />
                </button>
            </div>
            <div className={styles.profileCard__separator}></div>
            <p>Member since Mar 15, 2021</p>
        </div>
    );
};

export default ProfileCard;
