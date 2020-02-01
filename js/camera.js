function createCamera() {
	let name;

	function Camera() {
		name = 'Камера';
	}
	
	Camera.prototype.frame = function(block) {
		return block;
	}

	return new Camera;
}