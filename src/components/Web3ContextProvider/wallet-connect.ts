import { initializeConnector } from '@web3-react/core'
import { WalletConnect } from '@web3-react/walletconnect-v2'
import { Connection, ConnectionType, onConnectionError } from './type'
import { CHAIN_TO_URL_MAP } from './constants'

export default function buildWalletConnectConnector() {

  const [web3WalletConnect, web3WalletConnectHooks] = initializeConnector<WalletConnect>(
    (actions) =>{
      return(
        new WalletConnect({
          actions,
          options: {
            rpc: CHAIN_TO_URL_MAP,
            showQrModal: true,
            chains:[1,56],
            projectId:process.env.REACT_APP_WALLETCONNECT_PROJECT_ID!
          },
          onError: onConnectionError,
        }))
    }

  )
  const walletConnectConnection: Connection = {
    connector: web3WalletConnect,
    hooks: web3WalletConnectHooks,
    type: ConnectionType.WALLETCONNECT,
  }
  return walletConnectConnection
}