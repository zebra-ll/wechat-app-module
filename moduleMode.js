let class=(function(){
	function setName(name){
		this.name=name
	}
	function getName(){
		return name;
	}
	function setColor(color){
		this.color=color;
	}
	function say(){
		console.log(`my name is ${getName}`)
	}
})()