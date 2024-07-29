const TronWeb = require("tronweb");

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',  // 主网地址
    // fullHost: 'https://api.shasta.trongrid.io', // 测试网地址
    solidityNode: 'https://api.trongrid.io',
    headers: {"TRON-PRO-API-KEY": '1dd56a46-097f-49dc-a1c8-d1deedade207'},//api key
    /*privateKey: '1dd56a46-097f-49dc-a1c8-d1deedade207' // 这里不需要私钥，因为我们只是查询余额*/
});

export const queryAmount = async (tokenAddress, walletAddress) => {
    try {
        // 创建合约实例
        tronWeb.setAddress(tokenAddress);
        const contract = await tronWeb.contract().at(tokenAddress);

        // 调用 balanceOf 方法
        const balance = await contract.balanceOf(walletAddress).call();
        console.log('address: %s, amount: %s', walletAddress, balance.toString());
        return balance.toString();
    } catch (error) {
        console.error(error);
        return '查询失败';
    }
};

export const queryTransactions = async (tokenAddress, walletAddress) => {
    tronWeb.setAddress(tokenAddress);
    tronWeb.trx.getTransaction(walletAddress)
        .then(({data}) => console.log(data))
        .catch(err => console.error(err));
};
