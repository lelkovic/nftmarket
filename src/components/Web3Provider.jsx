import React from 'react';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core'

import { hooksMetaMask as metaMaskHooks, metaMask } from '../web3-lib/connectors'
import { hooksWalletConnectV2 as walletConnectV2Hooks, walletConnectV2 } from '../web3-lib/connectors'
import { getName } from '../web3-lib/utils'

const connectors = [
  [metaMask, metaMaskHooks],
  [walletConnectV2, walletConnectV2Hooks],
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