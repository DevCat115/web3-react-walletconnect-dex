import React, { useContext, useEffect, useState } from 'react'
import { Menu as UikitMenu, ConnectorNames } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import { connectorsByName } from 'connectors'
import { getConnection, tryActivateConnector, tryDeactivateConnector  } from 'components/Web3ContextProvider/connections'
import { ConnectionType } from 'components/Web3ContextProvider/type'
import links from './config'

const Menu: React.FC = (props) => {
  const { account, connector } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetPriceData()
  const cakePriceUsd = priceData ? Number(priceData.prices.Cake) : undefined
  const profile = useGetLocalProfile()
  const disconnect = async () => {
    if(connector)
      await tryDeactivateConnector(connector)
  }
  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={ async (connectorId: ConnectorNames) => {
        const curConnector = connectorsByName[connectorId]
        if (curConnector) {
           await tryActivateConnector(getConnection(connectorId).connector)
        }
      }}
      logout={ disconnect}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      // cakePriceUsd={cakePriceUsd}
      // profile={profile}
      {...props}
    />
  )
}

export default Menu
