<template>
  <div class="hello">
    <h1>Welcome to Your Vue.js Dapp</h1>
    <div v-if="state.status">
      <button @click="connectUserWallet" class="button">Connected</button>
      <h3>Address: {{ state.address }}</h3>
      <h3>ChainId: {{ state.chainId }}</h3>
      <button @click="disconnectUser" class="disconnect__button">Disconnect</button>
    </div>

    <button v-else @click="connectUserWallet" class="button"> Connect Wallet</button>

    <button @click="addAccountWallet" class="button"> Add Wallet</button>
    <button @click="queryAccountWallet" class="button"> Query Wallet</button>
    <button @click="queryTransactionsWallet" class="button"> Query Trans</button>
  </div>
</template>

<script>
import connect from '../composables/connect/index';

export default {
  name: 'StatusContainer',
  props: {
    msg: String
  },
  setup: () => {
    const {queryAmount, queryTransactions, addAccount, connectWalletConnect, disconnectWallet, state} = connect();
    const connectUserWallet = async () => {
      await connectWalletConnect();
    };


    const disconnectUser = async () => {
      await disconnectWallet()
    }

    const addAccountWallet = async () => {
      await addAccount()
    }

    const queryAccountWallet = async () => {
      await queryAmount("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", "TXzjVZoWSKHrXcH3JGzdUXWp1zPy8WieK4")
          .then(balance => {
            console.log("amount :" , balance.toString());
          });
    }

    const queryTransactionsWallet = async () => {
      await queryTransactions("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", "TXzjVZoWSKHrXcH3JGzdUXWp1zPy8WieK4");
    }

    return {
      queryAccountWallet,
      queryTransactionsWallet,
      addAccountWallet,
      connectUserWallet,
      disconnectUser,
      state
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>