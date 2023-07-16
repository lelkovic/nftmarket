import { initializeConnector } from "@web3-react/core";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";

import { MAINNET_CHAINS } from "../../chains";

const [mainnet, ...optionalChains] = Object.keys(MAINNET_CHAINS).map(Number);

export const [walletConnectV2, hooks] = initializeConnector(
    (actions) =>
        new WalletConnectV2({
            actions,
            options: {
                // todo: need move projectid to env
                projectId: "31b76537a58759fc36e75d09b27af0b5",
                chains: [mainnet],
                optionalChains,
                showQrModal: true,
            },
        })
);
