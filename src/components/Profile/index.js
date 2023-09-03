import React, { useState } from "react";
import { handleDisconnect } from "../../helpers/web3";
import styles from "./styles.module.scss";
import avatar from "../../assets/images/avatar.png";
import Human from "../../assets/images/Human.png";
import Image from "../../assets/images/Image.png";
import LightBulb from "../../assets/images/LightBulb.png";
import Disconnect from "../../assets/images/Disconnect.png";

export const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.profile}>
            <button className={styles.profile__button} onClick={() => setIsOpen(!isOpen)}>
                <img src={avatar} alt="avatar" className={styles.profile__img} />
                <p className={styles.profile__balance}>123</p>
                <p className={styles.profile__eth}>ETH</p>
            </button>
            {isOpen && (
                <div className={styles.profile__menu}>
                    <p className={styles.profile__userName}>Enrico Cole</p>
                    <p className={styles.profile__address}>Wallet</p>
                    <div className={styles.profile__chainInfo}>
                        <div className={styles.profile__chain}>
                            <img src={avatar} alt="avatar" className={styles.profile__img} />
                        </div>
                        <div className={styles.profile__chainBalance}>
                            <p className={styles.profile__chainTitle}>Balance</p>
                            <p className={styles.profile__chainValue}>4.689 ETH</p>
                        </div>
                        <a className={styles.profile__linkCoinbase} href="#">
                            Manage fun on Coinbase
                        </a>
                    </div>
                    <div className={styles.profile__item}>
                        <img className={styles.profile__icon} src={Human} alt="logo" />
                        <a href="#">My Profile</a>
                    </div>
                    <div className={styles.profile__item}>
                        <img className={styles.profile__icon} src={Image} alt="logo" />
                        <a href="#">My Items</a>
                    </div>
                    <div className={styles.profile__item}>
                        <img className={styles.profile__icon} src={LightBulb} alt="logo" />
                        <p>Dark Theme</p>
                        <button className={styles.profile__switch}>
                            <span className={styles.profile__blueSwitch}></span>
                        </button>
                    </div>
                    <div className={styles.profile__item}>
                        <img className={styles.profile__icon} src={Disconnect} alt="logo" />
                        <button className={styles.profile__disconnect} onClick={handleDisconnect}>
                            Disconnect
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Profile;
