import React from "react";
import styles from "./styles.module.scss";
import { useState } from "react";
import data from "./gallery.json";
import loading from "../../assets/images/loading.png";

export const ProfileGallery = () => {
    const gallery = data.gallery;
    const [activeTab, setActiveTab] = useState("On Sale");
    console.log(data.gallery);
    const renderStocks = (stock) => {
        return stock.map((stockImage, key) => (
            <div key={key} className={styles.ProfileGallery__stock}>
                <img className={styles.ProfileGallery__stockImg} src={stockImage} />
            </div>
        ));
    };
    const renderGallery = () => {
        return gallery.map((item, key) => (
            <div key={key} className={styles.ProfileGallery__item}>
                <img className={styles.ProfileGallery__itemImg} src={item.img} />
                <div className={styles.ProfileGallery__itemBlock}>
                    <h3>{item.title}</h3>
                    <p className={styles.ProfileGallery__itemPrice}>{item.price} ETH</p>
                </div>
                <div className={styles.ProfileGallery__itemBlock}>
                    <div className={styles.ProfileGallery__stocksWrap}>{renderStocks(item.stock)}</div>
                    <p className={styles.ProfileGallery__textStock}>{item.stock.length} in stock </p>
                </div>
                <div className={styles.ProfileGallery__sep}></div>
                <div className={styles.ProfileGallery__itemBlock}>
                    <p className={styles.ProfileGallery__bidInfo}>
                        Highest bit <b>{item.highestBid} ETH</b>
                    </p>
                    <p className={styles.ProfileGallery__bidInfo}> New bid 🔥</p>
                </div>
            </div>
        ));
    };
    return (
        <div className={styles.ProfileGallery}>
            <div className={styles.ProfileGallery__tabs}>
                <button
                    onClick={() => setActiveTab("On Sale")}
                    className={activeTab === "On Sale" && styles.ProfileGallery__activeTab}
                >
                    On Sale
                </button>
                <button
                    onClick={() => setActiveTab("Collectibles")}
                    className={activeTab === "Collectibles" && styles.ProfileGallery__activeTab}
                >
                    Collectibles
                </button>
                <button
                    onClick={() => setActiveTab("Created")}
                    className={activeTab === "Created" && styles.ProfileGallery__activeTab}
                >
                    Created
                </button>
                <button
                    onClick={() => setActiveTab("Likes")}
                    className={activeTab === "Likes" && styles.ProfileGallery__activeTab}
                >
                    Likes
                </button>
                <button
                    onClick={() => setActiveTab("Following")}
                    className={activeTab === "Following" && styles.ProfileGallery__activeTab}
                >
                    Following
                </button>
                <button
                    onClick={() => setActiveTab("Followers")}
                    className={activeTab === "Followers" && styles.ProfileGallery__activeTab}
                >
                    Followers
                </button>
            </div>
            <div className={styles.ProfileGallery__galleryWrap}>{renderGallery()}</div>

            <div className={styles.ProfileGallery__loader}>
                <img src={loading} alt="Loading..." />
            </div>
        </div>
    );
};

export default ProfileGallery;
