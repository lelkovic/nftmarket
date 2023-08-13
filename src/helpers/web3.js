import { metaMask } from '../web3-lib/connectors';

export const handleDisconnect = () => {
    if (metaMask?.deactivate) {
        void metaMask.deactivate();
    } else {
        void metaMask.resetState();
    }
};