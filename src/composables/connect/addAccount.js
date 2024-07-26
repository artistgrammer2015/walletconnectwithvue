var Web3 = require("web3");
const mainnet = "https://mainnet.infura.io/metamask 15";

const web3 = new Web3(new Web3.providers.HttpProvider(mainnet));

//creating an address using a private key
const addAccount = async () => {
    let wallet = web3.eth.accounts.wallet.create(1);
    console.log(wallet);
}

//getting the address balance
/*function getAddressBalance() {
    web3.eth.getBalance().then(balance => {
        if (balance) {
            console.log("WEI", balance);
            console.log("ETH", web3.utils.fromWei(balance));
        } else {
            console.log("Error getting balance");
        }
    });
}*/

export default addAccount;