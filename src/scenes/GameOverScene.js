import Phaser from 'phaser'

var replayButton
var scoreText

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super('game-over-scene')
    }

    init(data) {
        // Receive data that has been passed from the previous scene
        this.scoreLabel = data.score
    }

    preload() {
        this.load.image('background', 'images/bg_layer1.png')
        this.load.image('gameover', 'images/gameover.png')
        this.load.image('replay', 'images/replay.png')
    }

    create() {
        this.add.image(240, 320, 'background')
        this.add.image(240, 280, 'gameover')

        // Initialize replay button
        replayButton = this.add
            .image(240, 520, 'replay')
            .setInteractive()
            .setScale(0.5)

        replayButton.once(
            'pointerup',
            () => {
                this.scene.start('math-fighter-scene')
            },
            this
        )

        scoreText = this.add.text(180, 400, `Score : ${this.scoreLabel}`, {
            fontSize: 24,
            color: '#000',
        })

        console.log('Ini data: ', this.scoreLabel)
    }
}
