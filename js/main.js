// Создать мир экран камеру и героя
let world = createScene(),
hero = createMario(),
camera = createCamera(),
screen = createScreen();

function begin() {
    screen.showBack();
    screen.show(camera.frame(world.getBlock(hero.getCoord())));
}

setTimeout(begin, 200);