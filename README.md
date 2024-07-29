# walletconnectwithvue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###  % node -v
v20.16.0

### % npm -v
10.8.1

### build the project
% npm install -g @vue/cli
% sudo vue create walletconnectwithvue
% cd walletconnectwithvue
% npm i ethers
% sudo chmod -R 777 /Users/xxx/.npm
% npm i node-polyfill-webpack-plugin
% npm run serve 
> walletconnectwithvue@0.1.0 serve
> vue-cli-service serve

INFO  Starting development server...


DONE  Compiled successfully in 1633ms                                                                                                                                           2:11:43 PM


App running at:
- Local:   http://localhost:8080/
- Network: http://192.168.50.218:8080/

Once that is done you can now start the server

### infura.io
https://www.infura.io/zh/product/overview
https://github.com/INFURA
japan910803/G...4#

### setting infura
https://docs.infura.io/api/getting-started

https://blog.logrocket.com/integrating-walletconnect-vue-js-dapps/

https://edu.51cto.com/course/6119.html

### Tronweb
https://blog.csdn.net/Kakahhrr/article/details/134729973

https://www.trongrid.io/dashboard/detail/148488 japan910803 Gl...4#

https://developers.tron.network/reference/account-createaccount

USDT TRC20 CONSTRACT ADDRESS: TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t

TEST address: TMrcE2cvCP55amGjfc3r9e2sdQkhayv9K1  Gl...8#

API KEY: 1dd56a46-097f-49dc-a1c8-d1deedade207

### 官方github实现了java、tronweb等
https://github.com/tronprotocol

### 搭建tron公链
https://blog.csdn.net/baidu_38432732/article/details/102478300

### 一键部署 Tron 网络节点的利器——TronDeployment
https://cloud.tencent.com/developer/article/2349908 docker方式启动
https://github.com/tronprotocol/tron-deployment

https://blog.csdn.net/gitblog_00074/article/details/139488655
一个简洁而强大的开源项目，允许你轻松地在本地或服务器上部署tron全节点(FullNode)和固态节点(SolidityNode)，甚至是gRPC Gateway。
TronDeployment提供了一个名为deploy_tron.sh的脚本，该脚本基于Shell编写，具备高度自动化的特点。它能够根据提供的命令行参数，自动完成一下任务：
- 安装必要的依赖
- 获取指定版本的tron节点源码
- 配置节点连接到指定的网络（主网或测试网）
- 处理数据库（保持、移除或备份）
- 启动FullNode或SolidityNode，并设定合适的端口号，另外有SuperNode只负责生产区块，tron时dpos共识，只有27个SR能够产块。
此外，项目还提供了deploy_grpc_gateway.sh脚本，用于快速部署gRPC Gateway，使得外部应用可以通过HTTP方式与TRON节点交互。
TronDeployment的应用场景广泛，包括但不限于：
- 节点运维：对于想要运行tron节点的开发者，可以方便地部署全节点或固态节点，进行监控和数据同步
- 开发测试：开发人员可以快速搭建测试环境，进行dApp开发、智能合约调试等
- 数据服务：通过部署gRPC Gateway，第三方服务可以轻松获取tron区块链的数据，实现各种数据服务
项目特点
- 一键部署：只需要简单的命令行参数，即可完成节点的部署，大大降低了入门门槛
- 灵活性高：支持自定义启动应用类型、网络、数据库操作、端口号，以及特定的Git分支和提交ID
- 兼容性强：适用于多种操作系统，包括Linux和macOS，同时也可扩展到其他系统
- 可扩展性：通过修改脚本或添加新的功能模块，可以轻易适应未来TRON网络的变化
- 以下是使用 deploy_tron.sh 脚本部署主网 FullNode 的简单示例：
  wget https://raw.githubusercontent.com/tronprotocol/TronDeployment/master/deploy_tron.sh -O deploy_tron.sh
  bash deploy_tron.sh --app FullNode --net mainnet
- deploy_grpc_gateway https://github.com/tronprotocol/grpc-gateway
1、现在安装go https://go.dev/dl/ macOS m1/m2一定安装ARM64版本
  % which go
  /usr/local/go/bin/go
  % go version
  go version go1.22.5 darwin/arm64
2、
  % sudo vi ~/.zshrc
  % echo $GOPATH
  /usr/local/go
3、