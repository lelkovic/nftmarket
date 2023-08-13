import React from "react";
import Container from "../Container";
import styles from "./styles.module.scss";
import { hooksMetaMask } from "../../web3-lib/connectors";
import { handleDisconnect } from "../../helpers/web3";
import connectPreview from "../../assets/images/connectPreview.png";

import { metaMask } from "../../web3-lib/connectors";
// import { walletConnectV2 } from '../../web3-lib/connectors'
import { getAddChainParameters } from "../../web3-lib/chains";

export const Connect = () => {
    const { useAccounts } = hooksMetaMask;
    const accounts = useAccounts();

    const goBack = () => {
        window.history.back();
    };

    const desiredChainId = 1;

    const switchChain = async (connector) => {
        try {
            await connector.activate(getAddChainParameters(desiredChainId));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Container className={styles.connect}>
            <div className={styles.connect__header}>
                <button onClick={goBack} className={styles.connect__backbtn}>
                    <i className="icon-vector-Stroke" />
                </button>
                <h1>Connect your wallet</h1>
            </div>
            <div className={styles.connect__main}>
                <div className={styles.connect__left}>
                    {accounts ? (
                        <button className={styles.connect__disconnect} onClick={handleDisconnect}>
                            Disconnect
                        </button>
                    ) : (
                        <button onClick={() => switchChain(metaMask)}>MetaMask</button>
                    )}
                    {/* <button onClick={() => switchChain(walletConnectV2)}>
                        Wallet Connect
                    </button> */}
                </div>
                <div className={styles.connect__right}>
                    <img src={connectPreview} alt="connectPreview" />
                </div>
            </div>
        </Container>
    );
};

export default Connect;
