import { Web3OnboardProvider, init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import infinityWalletModule from '@web3-onboard/infinity-wallet'
import fortmaticModule from '@web3-onboard/fortmatic'
import gnosisModule from '@web3-onboard/gnosis'
import keepkeyModule from '@web3-onboard/keepkey'
import keystoneModule from '@web3-onboard/keystone'
import ledgerModule from '@web3-onboard/ledger'
import portisModule from '@web3-onboard/portis'
import trezorModule from '@web3-onboard/trezor'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'
import magicModule from '@web3-onboard/magic'
import dcentModule from '@web3-onboard/dcent'
import sequenceModule from '@web3-onboard/sequence'
import tahoModule from '@web3-onboard/taho'
import trustModule from '@web3-onboard/trust'
import frontierModule from '@web3-onboard/frontier'
import ConnectWallet from './connectWallet'

const INFURA_KEY = '436c016dfa5e4a4884d7104cce13d238'

const injected = injectedModule()
const coinbase = coinbaseModule()
const dcent = dcentModule()
const walletConnect = walletConnectModule()

const portis = portisModule({
  apiKey: 'bd5fc0ac-182c-449f-b4a3-f55cd840f8f9'
})

const fortmatic = fortmaticModule({
  apiKey: 'pk_live_DC5301E7AD5C0366'
})

const infinityWallet = infinityWalletModule()
const ledger = ledgerModule()
const keystone = keystoneModule()
const keepkey = keepkeyModule()
const gnosis = gnosisModule()
const sequence = sequenceModule()
const taho = tahoModule() // Previously named Tally Ho wallet
const trust = trustModule()
const frontier = frontierModule()

const trezorOptions = {
  email: 'test@test.com',
  appUrl: 'https://www.blocknative.com'
}

const trezor = trezorModule(trezorOptions)

const magic = magicModule({
  apiKey: 'apiKey'
})

const wallets = [
  infinityWallet,
  keepkey,
  sequence,
  injected,
  trust,
  frontier,
  taho,
  ledger,
  coinbase,
  dcent,
  trezor,
  walletConnect,
  gnosis,
  magic,
  fortmatic,
  keystone,
  portis
]

const chains = [
  {
    id: '0x1',
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_KEY}`
  },
  {
    id: '0x5',
    token: 'ETH',
    label: 'Goerli',
    rpcUrl: `https://goerli.infura.io/v3/${INFURA_KEY}`
  },
  {
    id: '0x13881',
    token: 'MATIC',
    label: 'Polygon - Mumbai',
    rpcUrl: 'https://matic-mumbai.chainstacklabs.com'
  },
  {
    id: '0x38',
    token: 'BNB',
    label: 'Binance',
    rpcUrl: 'https://bsc-dataseed.binance.org/'
  },
  {
    id: '0xA',
    token: 'OETH',
    label: 'Optimism',
    rpcUrl: 'https://mainnet.optimism.io'
  },
  {
    id: '0xA4B1',
    token: 'ARB-ETH',
    label: 'Arbitrum',
    rpcUrl: 'https://rpc.ankr.com/arbitrum'
  }
]

const appMetadata = {
  name: 'Connect Wallet Example',
  icon: '<svg>My App Icon</svg>',
  description: 'Example showcasing how to connect a wallet.',
  recommendedInjectedWallets: [
    { name: 'MetaMask', url: 'https://metamask.io' },
    { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
  ]
}

const web3Onboard = init({
  wallets,
  chains,
  appMetadata
})

function App() {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <ConnectWallet />
    </Web3OnboardProvider>
  )
}

export default App
