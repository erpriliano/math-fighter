import Phaser from 'phaser'

export default class MathFighterScene extends Phaser.Scene {
    constructor() {
        super('math-fighter-scene')
    }

    init() {
        this.gameHalfWidth = this.scale.width * 0.5
        this.gameHalfHeight = this.scale.height * 0.5

        // Initialize property 'player'
        this.player = undefined

        // Initialize property 'enemy'
        this.enemy = undefined

        // Initialize property slash
        this.slash = undefined
    }

    preload() {
        // Image
        this.load.image('background', 'images/bg_layer1.png')
        this.load.image('fight-bg', 'images/fight-bg.png')
        this.load.image('tile', 'images/tile.png')
        this.load.image('start-btn', 'images/start_button.png')

        // Spritesheet
        this.load.spritesheet('player', 'images/warrior1.png', {
            frameHeight: 80,
            frameWidth: 80,
        })
        this.load.spritesheet('enemy', 'images/warrior2.png', {
            frameHeight: 80,
            frameWidth: 80,
        })
        this.load.spritesheet('numbers', 'images/numbers.png', {
            frameHeight: 71.25,
            frameWidth: 131,
        })
        this.load.spritesheet('slash', 'images/slash.png', {
            frameHeight: 88,
            frameWidth: 42,
        })
    }

    create() {
        // Create bg
        this.add.image(240, 320, 'background')
        // Create fight-bg
        const fight_bg = this.add.image(240, 160, 'fight-bg')
        // Create tile
        const tile = this.physics.add.staticImage(
            240,
            fight_bg.height - 40,
            'tile'
        )

        // Create player
        this.player = this.physics.add
            .sprite(
                this.gameHalfWidth - 150,
                this.gameHalfHeight - 200,
                'player'
            )
            .setOffset(-50, -8)
            .setBounce(0.2)
        // Collide the player with the tile
        this.physics.add.collider(this.player, tile)

        // Create enemy
        this.enemy = this.physics.add
            .sprite(
                this.gameHalfWidth + 150,
                this.gameHalfHeight - 200,
                'enemy'
            )
            .setOffset(50, -8)
            .setBounce(0.2)
            .setFlipX(true)
        // Collide the enemy with the tile
        this.physics.add.collider(this.enemy, tile)

        // Create slash
        this.slash = this.physics.add
            .sprite(240, 60, 'slash')
            .setActive(false)
            .setVisible(false)
            .setGravityY(-500)
            .setOffset(0, -10)
            .setDepth(1)
            .setCollideWorldBounds(true)
    }
}
