import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";

export function getName(connector) {
    if (connector instanceof MetaMask) return "MetaMask";
    if (connector instanceof WalletConnectV2) return "WalletConnect V2";
    if (connector instanceof CoinbaseWallet) return "Coinbase Wallet";
    return "Unknown";
}
