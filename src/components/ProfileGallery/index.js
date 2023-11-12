import React from "react";
import styles from "./styles.module.scss";
import { useState } from "react";

export const ProfileGallery = () => {
    const [activeTab, setActiveTab] = useState("On Sale");
    return (
        <div className={styles.ProfileGallery}>
            <div className={styles.ProfileGallery__tabs}>
                <button className={activeTab === "On Sale" && styles.ProfileGallery__activeTab}>On Sale</button>
                <button>Collectibles</button>
                <button>Created</button>
                <button>Likes</button>
                <button>Following</button>
                <button>Followers</button>
            </div>
            <div className={styles.ProfileGallery__galleryWrap}></div>

            <div className={styles.ProfileGallery__loader}></div>
        </div>
    );
};

export default ProfileGallery;
