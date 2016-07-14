import { Web3ReactHooks } from '@web3-react/core'
import { Connector } from '@web3-react/types'

export interface Connection {
    connector: Connector
    hooks: Web3ReactHooks
    type: ConnectionType
}
  
export enum ConnectionType { INJECTED='injected' , WALLETCONNECT='walletconnect' }

export function onConnectionError(error: Error) {
    console.debug(`web3-react error: ${error}`)
  }
  