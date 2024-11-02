const { ethers, EtherscanProvider } = require("ethers");

console.log("私钥",ethers.sha256(ethers.toUtf8Bytes("用户输入的助记语")));
const privateKey = ethers.sha256(ethers.toUtf8Bytes("用户输入的助记语")); //用户输入的助记语。可以是中英文，长度不少于10。

const wallet = new ethers.Wallet(privateKey);

const MessagePrefix = "\x19Ethereum Signed Message:\n";
const message="test ll";
console.log("messagelen:",message.length);
    ddd=ethers.concat([
        ethers.toUtf8Bytes(MessagePrefix),
        ethers.toUtf8Bytes(String(message.length)),
        ethers.toUtf8Bytes(message)
    ]);

var command="unlock";
const cmd={
    TimeStamp:Math.floor(Date.now() / 1000),
    command,command
}
var cmdstr=JSON.stringify(cmd)

console.log("cmdstrhash:",ethers.hashMessage(cmdstr));
const signature =  wallet.signMessageSync(cmdstr);

const obj = {
    cmd:cmdstr,
    PubKey: wallet.signingKey.publicKey,
    signature:signature,
    address:wallet.address
};
var json=JSON.stringify(obj);
console.log(json);
console.log("pubkey:",wallet.signingKey.publicKey);
