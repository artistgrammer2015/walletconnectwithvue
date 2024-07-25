import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import ethers from "ethers";

/*export const provider = new WalletConnectProvider({
    infuraId: process.env.VUE_APP_INFURA_ID,
});*/

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: process.env.VUE_APP_INFURA_ID,
        }
    }
};
const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: false,
    disableInjectedProvider: false,
    providerOptions
});
const provider = await web3Modal.connect();
this.provider = new ethers.providers.Web3Provider(provider, "any");