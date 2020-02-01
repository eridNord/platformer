function createObject(type, name) {
	let coin;

	function Predmet(type, name) {
		this.name = name;
		this.type = type;
		this.image = new Image();
		this.image.src = this.getSrc(type);
	}
	
	Predmet.prototype.getSrc = function(type) {
		let src = 'image/coin.png';
		
		return src;
	}

	return new Predmet;
}