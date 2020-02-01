// Модуль сцены
function createScene() {
	let name, version,
	width,height,
	matrix,
	cameraWidth;
	
	function Scene() {
        version = '0.2'
		name = 'Сцена';
		width = 32;
		height = 8;
		cameraWidth = 12;
		matrix = this.createMatrix();
	}

	Scene.prototype.createMatrix = function() {
		let matrix = ['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
				'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
				'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
				'0 0 0 0 0 0 0 0 0 0 0 0 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
				'0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
				'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
				'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
				'1 1 1 1 0 0 0 1 1 1 0 0 0 0 0 0 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0'
			   ];
		height = matrix.length;
		return matrix;
	};
	
	Scene.prototype.getBlock = function(coord) {
		let i,block = [],
		start, end;
		start = coord.x - 6;
		end = coord.x + Math.ceil(cameraWidth/2);
		
		if (coord.x < 6) {
			start = 0;
			end = cameraWidth;
		}
		if (coord.x > matrix[0].split(' ').length - Math.ceil(cameraWidth/2)) {
			start = matrix[0].split(' ').length - cameraWidth - 1;
			end = matrix[0].split(' ').length - 1;
		}
		
		for(i=0; i<height; i++) {
			block[i] = matrix[i].split(' ').slice(start, end);
		}
		coord.x;
		
		return block; // матрица размера 10х8
	}

	return new Scene;
}