
import { AddEthereumChainParameter, Connector } from '@web3-react/types'
import { ConnectorNames } from '@pancakeswap-libs/uikit'
import buildInjectedConnector  from './injected'
import buildWalletConnectConnector  from './wallet-connect'
import { ConnectionType,Connection } from './type'
import { CHAIN_INFO } from './constants'

export function getHasMetaMaskExtensionInstalled(): boolean {
  return (window.ethereum?.isMetaMask ?? false)
}

export const PRIORITIZED_CONNECTORS: { [key in ConnectionType] : Connection } = {
  [ConnectionType.INJECTED]: buildInjectedConnector(),
  [ConnectionType.WALLETCONNECT]: buildWalletConnectConnector()
  // [ConnectionType.NETWORK]: buildNetworkConnector(),
}

export function getConnection(c: Connector | ConnectorNames) {
  if (c instanceof Connector) {
    const connection = Object.values(PRIORITIZED_CONNECTORS).find((connec) => (connec?.connector === c))
    if (!connection) {
      throw Error('Unsupported Connector')
    }
    return connection
  } 
  
  switch (c) {
    case ConnectorNames.Injected:
      return PRIORITIZED_CONNECTORS[ConnectionType.INJECTED]
    case ConnectorNames.WalletConnect:
      return PRIORITIZED_CONNECTORS[ConnectionType.WALLETCONNECT]
    default: return PRIORITIZED_CONNECTORS[ConnectionType.INJECTED]
  }
  
}

export const switchNetwork = async (chainId: number, connectionType: ConnectorNames | null) => {
  if (!connectionType) {
    return
  }

  const connector = getConnection(connectionType).connector

  if (connectionType === ConnectorNames.WalletConnect) {
    if(connector)
        await connector.activate(chainId)
    return
  }

  const chainInfo = CHAIN_INFO[chainId]
  const addChainParameter: AddEthereumChainParameter = {
    chainId,
    chainName: chainInfo.label,
    rpcUrls: [chainInfo.rpcUrl],
    nativeCurrency: chainInfo.nativeCurrency,
    blockExplorerUrls: [chainInfo.explorer],
  }
  await connector.activate(addChainParameter)
}

export const tryActivateConnector = async (connector: Connector): Promise<ConnectionType> => {
  try{
    await connector.activate()
  }catch(err){
    console.log(err)
  }
  const connectionType = getConnection(connector)?.type as ConnectionType
  return connectionType
}

export const tryDeactivateConnector = async (connector: Connector): Promise<null | undefined> => {
  connector.deactivate?.()
  connector.resetState()
  return null
}