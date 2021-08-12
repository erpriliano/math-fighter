import Phaser from 'phaser'

export default class MathFighterScene extends Phaser.Scene
{
	constructor()
	{
		super('math-fighter-scene')
	}

    init() {

    }

	preload() {
        // Image
        this.load.image('background', 'images/bg_layer1.png')
        this.load.image('fight-bg', 'images/fight-bg.png')
        this.load.image('tile', 'images/tile.png')
        this.load.image('start-btn', 'images/start_button.png')

        // Spritesheet
        this.load.spritesheet('player', 'images/warrior1.png', { frameHeight: 80, frameWidth: 80 })
        this.load.spritesheet('enemy', 'images/warrior2.png', { frameHeight: 80, frameWidth: 80 })
        this.load.spritesheet('numbers', 'images/numbers.png', { frameHeight: 71.25, frameWidth: 131 })
        this.load.spritesheet('slash', 'images/slash.png', { frameHeight: 88, frameWidth: 42 })
    }

    create() {

    }
}
