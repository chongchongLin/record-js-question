const config = {
	languages: [],
	set language(lang) {
		return this.languages.push(lang);
	}
};

console.log(config.language);
//set 在于修改属性,并不保存一个实际的值