const num = parseInt("7*6", 10);

//会输出7，因为parseInt检查字符串中的字符是否合法. 一旦遇到一个在指定进制中不合法的字符后，立即停止解析并且忽略后面所有的字符
// *就是不合法的数字字符。所以只解析到"7"，并将其解析为十进制的7. num的值即为7.