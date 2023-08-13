import { initializeConnector } from "@web3-react/core";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";
import { MetaMask } from "@web3-react/metamask";
import { MAINNET_CHAINS } from "./chains";

const [mainnet, ...optionalChains] = Object.keys(MAINNET_CHAINS).map(Number);

export const [metaMask, hooksMetaMask] = initializeConnector((actions) => new MetaMask({ actions }));

export const [walletConnectV2, hooksWalletConnectV2] = initializeConnector(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: "31b76537a58759fc36e75d09b27af0b5",
        chains: [mainnet],
        optionalChains,
        showQrModal: true,
      },
    })
)