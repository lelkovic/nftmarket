import React from "react";
import { HomePage } from "./pages/home/home";
import { ConnectWallet } from "./pages/connectWallet/connectWallet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
// import { NotFound } from './components/NotFound/NotFound';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <Router>
            <div style={{ backgroundColor: "#FCFCFD" }}>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/connectWallet" element={<ConnectWallet />} />
                        {/* <Route exact path="*" element={<NotFound />} /> */}
                    </Routes>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
