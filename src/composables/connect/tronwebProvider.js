const TronWeb = require("tronweb");

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',  // 主网地址
    // fullHost: 'https://api.shasta.trongrid.io', // 测试网地址
    privateKey: '' // 这里不需要私钥，因为我们只是查询余额
});

const tronwebProvider = async (tokenAddress, walletAddress) => {
    try {
        // 创建合约实例
        const contract = await tronWeb.contract().at(tokenAddress);

        // 调用 balanceOf 方法
        const balance = await contract.balanceOf(walletAddress).call();
        return balance.toString();
    } catch (error) {
        console.error(error);
        return '查询失败';
    }
};

export default tronwebProvider;


/*// 示例：查询 TRC20 代币余额
const tokenAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'; // 替换为您的 TRC20 代币合约地址
const walletAddress = 'TMrcE2cvCP55amGjfc3r9e2sdQkhayv9K1'; // 替换为您要查询的钱包地址

getTRC20TokenBalance(tokenAddress, walletAddress)
    .then(balance => {
        console.log(`余额: ${balance}`);
    });*/
