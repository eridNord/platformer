function createMario() {
	let name, x, y;

	function Mario() {
		name = '';
		x = 0;
		y = 0;
	}
	
	Mario.prototype.getCoord = function() {
		return {x, y};
	}

	return new Mario;
}