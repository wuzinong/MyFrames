class people{
	constructor(x,y){
		 this.x = x;
		 this.y = y;
	}
	toString(){
		return "("+this.x+"-"+this.y+")";
	}
}

var p = new people("tom","18 years old");
console.log(p.toString()+"-----s-");
