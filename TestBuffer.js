/**javascript语言自身只有字符串数据类型，没有二进制数据类型
但在处理像TCP流或文件流时，必须使用到二进制数据，因此在Node.js中，定义了一个
Buffer类，用于创建一个专门存放二进制数据的缓冲区
*/

//创建一个buffer类，指定长度
var buf = new Buffer(10);
//创建一个指定数组
var buf1 = new Buffer([10,20,30,40,50]);
//创建一个指定字符串
var buf2 = new Buffer('yangshenghui','utf-8');
//写入缓冲区,并返回字符串长度
len = buf.write('yang');
console.log('写入字节数：'+ len);

//读出数据
console.log(buf.toString('ascii',0,5));
//转成json
var json = buf.toJSON(buf);
console.log("json:"+json);
//buffer的连接
var buf3 = Buffer.concat([buf,buf2]);
console.log('buf和buf2连接：'+buf3);
//buffer中比较，（比较两个buffer在Buffer中的前后）
var compare1 = buf.compare(buf2);
if(compare1<0){
	console.log(buf+"在"+buf2+'之前');
}else if(compare1==0){
	console.log(buf+"与"+buf2+'相同');
}else{
	console.log(buf+"在"+buf2+'之后');
}
//拷贝缓冲区
var buf4 = new Buffer(4);
buf.copy(buf4);
console.log('buf4为buf的copy:'+buf4.toString());
//缓冲区剪裁,得到一个新的缓冲区
var buf5 = buf.slice(0,2);
console.log('buf5是buf的slice：'+buf5);
//缓冲区长度
console.log('buf length:'+buf.length);