import React from "react";
import Container from "../Container";
import styles from "./styles.module.scss";
import connectPreview from "../../assets/images/connectPreview.png";

export const Connect = () => {
    const goBack = () => {
        window.history.back();
    };
    return (
        <Container classname={styles.connect}>
            <div className={styles.connect__header}>
                <button onClick={goBack} className={styles.connect__backbtn}>
                    <i className="icon-vector-Stroke" />
                </button>
                <h1>Connect your wallet</h1>
            </div>
            <div className={styles.connect__main}>
                <div className={styles.connect__left}>
                    <button>Formatic</button>
                    <button>Coinbase Wallet</button>
                    <button>MyEtherWallet</button>
                    <button>Wallet Connect</button>
                </div>
                <div className={styles.connect__right}>
                    <img src={connectPreview} alt="connectPreview" />
                </div>
            </div>
        </Container>
    );
};

export default Connect;
