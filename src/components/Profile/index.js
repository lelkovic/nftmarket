import React, { useState } from "react";
import { handleDisconnect } from "../../helpers/web3";
import styles from "./styles.module.scss";
import avatar from "../../assets/images/avatar.png";

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
                        <a href="#">My Profile</a>
                    </div>
                    <div className={styles.profile__item}>
                        <a href="#">My Items</a>
                    </div>
                    <div className={styles.profile__item}>
                        <p>Dark Theme</p>
                    </div>
                    <div className={styles.profile__item}>
                        <button onClick={handleDisconnect}>Disconnect</button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Profile;
