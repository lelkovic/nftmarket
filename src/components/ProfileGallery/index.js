import React from "react";
import styles from "./styles.module.scss";

export const ProfileGallery = () => {
    const [balances, setBalances] = useState();
    return (
        <div className={styles.ProfileGallery}>
            <div className={styles.ProfileGallery__tabs}>
                <button className={styles.ProfileGallery__activeTab}>On Sale</button>
                <button>Collectibles</button>
                <button>Created</button>
                <button>Likes</button>
                <button>Following</button>
                <button>Followers</button>
                
                <div/>
            <div className={styles.ProfileGallery__galleryWrap}></div>

            <div className={ProfileGallery__loader}></div>
        </div>
    );
};

export default ProfileGallery;
