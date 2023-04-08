import React from "react";
import { useTimer } from "react-timer-hook";
import styles from "./styles.module.scss";

export const MyTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 86400); // 24 hrs timer

    const { seconds, minutes, hours } = useTimer({
        expiryTimestamp: time,
        onExpire: () => console.warn("onExpire called"),
    });

    return (
        <div className={styles.myTimer}>
            <div className={styles.myTimer__item}>
                <span>{hours}</span>
                <p>hrs</p>
            </div>
            <div className={styles.myTimer__item}>
                <span>{minutes}</span>
                <p>mins</p>
            </div>
            <div className={styles.myTimer__item}>
                <span>{seconds}</span>
                <p>secs</p>
            </div>
        </div>
    );
};
