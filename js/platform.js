;let platformType = (function() {
	let name = 'Платформы',
	version = '0.1',
	platform = {
		src: 'image/platform.png',
		image: null, 
	};
	
	platform.image = new Image();
	platform.image.src = platform.src;

	return platform;
})(); 