function getA(){
	console.log("this is test1 func");
	this.a = "a";    
	this.b = "b";   
	this.c = "c";    
	this.d = "d";
	this.get = function(){
		 return "d"; 
	}; 
} 