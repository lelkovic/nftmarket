import React from 'react';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core'

import { coinbaseWallet, hooks as coinbaseWalletHooks } from './Connectors/coinbaseWallet'
import { hooks as metaMaskHooks, metaMask } from './Connectors/metaMask'
import { hooks as walletConnectV2Hooks, walletConnectV2 } from './Connectors/walletConnectV2'
import { getName } from '../utils'

const connectors = [
  [metaMask, metaMaskHooks],
  [walletConnectV2, walletConnectV2Hooks],
  [coinbaseWallet, coinbaseWalletHooks],
]

function Child() {
  const { connector } = useWeb3React()
  console.log(`Priority Connector is: ${getName(connector)}`)
  return null
}

export default function ProviderExample() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Child />
    </Web3ReactProvider>
  )
}