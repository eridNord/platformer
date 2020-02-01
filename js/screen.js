function createScreen() {
	let name,
	enviroment,
	action,
	width,
	height,
	background = {
			src: 'image/sky.jpg',
			image: new Image(), 
		},
	coin, platform,
	enviroment_canva, action_canva,
    cellSize;

	function Screen() {
		name = '';
		width = 600;
		height = 400;
        cellSize = 50;
		
		this.getCanvas();
		this.setDimension();
        
		background.image.src = background.src;
		coin = createObject('coin', 'монета');
		platform = platformType;
	}
    
    Screen.prototype.getCanvas = function() {
        enviroment = document.getElementById('enviroment');
        action = document.getElementById('action');
        
        enviroment_canva = enviroment.getContext('2d');
        action_canva = action.getContext('2d');
    }
    
    Screen.prototype.setDimension = function() {
        enviroment.setAttribute('width', width);
        enviroment.setAttribute('height', height);
		enviroment.style.margin = "0 0px";
        
        action.setAttribute('width', width);
        action.setAttribute('height', height);
		action.style.margin = "0 " + (-(width + 5)) + "px";
    }
	
	Screen.prototype.showBack = function() {
        enviroment_canva.drawImage(
            background.image,
            0,0,
            1279, 808,
            0,
            0, 
            width,
            height
        );
	}
    
    Screen.prototype.getSprite = function() {
        return background.image;
    }
	
	Screen.prototype.show = function(block) {
		let i, j, layout, predmet;
		for(i=0; i < block.length; i++) {
			for(j=0; j < block[0].length; j++) {
				if (block[i][j] == '0') continue;
				
				layout = (block[i][j] == 1) ? enviroment_canva: action_canva;
                predmet = (block[i][j] == 1) ? platform: coin;
				layout.drawImage(
					predmet.image, 
					40,
					32, 
					170,
					170, 
					j*cellSize,
					i*cellSize, 
					cellSize,
					cellSize
				);
			}
		}
	}

	return new Screen;
}