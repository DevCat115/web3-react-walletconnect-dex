import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, ButtonProps, useWalletModal, ConnectorNames } from '@pancakeswap-libs/uikit'
import { connectorsByName } from 'connectors'
import useI18n from 'hooks/useI18n'
import { getConnection, tryActivateConnector, tryDeactivateConnector } from 'components/Web3ContextProvider/connections'

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { account, connector} = useWeb3React()

  const handleLogin = async () => {
    if (connector) {
      await tryActivateConnector(getConnection(connector).connector)
   }
  }
  const disconnect = async () => {
    if(connector)
      await tryDeactivateConnector(connector)
  }

  const { onPresentConnectModal } = useWalletModal(handleLogin, (()=>disconnect()), account as string)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
