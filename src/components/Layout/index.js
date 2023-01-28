import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export const Layout = ({ children }) => {
    return (
        <div
        // className={styles.layout}
        >
            <Header />
            {children}
            <Footer />
        </div>
    );
};
