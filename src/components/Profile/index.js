import React, { useState } from "react";
import { handleDisconnect } from "../../helpers/web3";
import styles from "./styles.module.scss";
import avatar from "../../assets/images/avatar.png";

export const Profile = () => {
    return (
        <div className={styles.profile}>
            <img src={avatar} alt="avatar" className={styles.profile__img} />
            <p className={styles.profile__balance}>123</p>
            <p className={styles.profile__eth}>ETH</p>
        </div>
        //    <button className={styles.header__wbtn} onClick={handleDisconnect}>
        //         Disconnect
        //     </button>
    );
};
export default Profile;
