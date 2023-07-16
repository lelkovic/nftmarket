import React from "react";
import { HomePage } from "./pages/home/home";
import { ConnectWallet } from "./pages/connectWallet/connectWallet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web3Provider from "./components/Web3Provider";
import CoinbaseWalletCard from "./components/ConnectorCards/CoinbaseWalletCard";
import MetaMaskCard from "./components/ConnectorCards/MetaMaskCard";
import WalletConnectV2Card from "./components/ConnectorCards/WalletConnectV2Card";
import { Layout } from "./components/Layout";
// import { NotFound } from './components/NotFound/NotFound';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <Router>
            <Web3Provider />
            <div style={{ backgroundColor: "#FCFCFD" }}>
                <Layout>
                    <MetaMaskCard />
                    <WalletConnectV2Card />
                    <CoinbaseWalletCard />
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
