椭圆曲线签名ECC，在stm32上的实现；
git clone,
cd   xx
make
复制libecc.a到keil 的工程目录下.
在使用之前，需要先将libecc.a这个库文件，引入到user里面。
在你要使用这个程序中前面部分粘贴下行.
int command_verify(const char *cmdstr,char * signaturestr,char * address,char * publicKeystr);

然后，就可以在程序中使用这个函数了。
返回值：1，成功，2，命令串cmdstr与签名和公钥不符。9，公钥与地址不符。
举例：
int result =command_verify("{\"TimeStamp\":1730530275,\"command\":\"unlock\"}",
	"0x33a371779f24c625f9332f5a7c494a1902ce69f94c7c161015ff987d3443b79602114bf411206d3cdd378faf2216a29068caa3ffd070d02036944535501248201b",
	"0x127F0Fc321d2b71D5c064Fc31B0f08a2AdD739AD",	 "0x04127a5d4110bb542dc0c109b0db57ee8786f57da76107dce620737e84301273950664fe024b485b0847adf4b12028d59e949f01f2950dc28648cf9abf842d0f1d"
	);

