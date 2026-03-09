
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace bottleStack {
    let currentBottle: Sprite = null
    let speed = 500
    let baseball: Sprite = null
    let countdown = 0
    let bottleCount = 0
    let baseballCount = 0

    //% block
    export function startBottleStack() {
        scene.setBackgroundImage(assets.image`Background`)
        let table = sprites.create(assets.image`Table`, SpriteKind.Food)
        table.setPosition(80, 114)
        info.setLife(3)

        spawnBottle()
        spawnBall()

        game.onUpdateInterval(speed, function () {
            if (currentBottle) {
                currentBottle.y += (1 * (bottleCount / 4))
            }



            if (baseball) {
                if (baseball.scale > 0.5) {
                    scaling.scaleByPercent(baseball, -1 * bottleCount, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                }

                console.log("Baseball Scale: " + baseball.scale)

                if (baseball.scale <= 0.5) {
                    countdown++

                    let hitSomething = baseball.overlapsWith(currentBottle)

                    for (let bottle of sprites.allOfKind(SpriteKind.Food)) {
                        if (baseball.overlapsWith(bottle)) {
                            hitSomething = true
                            break
                        }
                    }

                    if (hitSomething) {
                        info.changeLifeBy(-1)
                        baseball.destroy()
                        spawnBall()
                        countdown = 0
                        console.log("Hit!")
                        console.log("Baseball Count: " + baseballCount)
                    } else if (countdown >= 5) {
                        baseball.destroy()
                        spawnBall()
                        countdown = 0
                        console.log("Miss :(")
                        console.log("Baseball Count: " + baseballCount)
                    }
                }
            }
        })

        sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
            spawnNewBottle(sprite)
            bottleCount++
            console.log("Bottles Stacked: " + bottleCount)
        })

        sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
            if (otherSprite != currentBottle) {
                spawnNewBottle(sprite)
                bottleCount++
                console.log("Bottles Stacked: " + bottleCount)
            }
        })
    }

    export function spawnNewBottle(bottle: Sprite) {
        bottle.vy = 0
        bottle.setKind(SpriteKind.Food)
        currentBottle = null
        spawnBottle()
    }

    export function spawnBottle() {
        let random_number = Math.randomRange(1, 10)
        if (random_number <= 5) {
            currentBottle = sprites.create(img`
. . f f f f f f . . 
. f b 1 1 1 1 b f . 
. . f b 1 1 b f . . 
. . . f 1 b f . . . 
. . . f b b f . . . 
. . . f b b f . . . 
. . f b b b b f . . 
. f b b b b b b f . 
. f b b b b b b f . 
f b b b b b b b b f 
f b f f b b f f b f 
f b f b f f b f b f 
f b b b b b b b b f 
f b b b b b b b b f 
f b b b b b b b b f 
. f f f f f f f f . 
                `, SpriteKind.Player)
        } else {
            currentBottle = sprites.create(img`
. . f f f f f f f f f f f f f f 
f f f 8 8 8 8 8 f 8 8 8 8 f 8 f 
f 1 f 8 8 8 8 8 8 8 f f 8 f 8 f 
f 1 f 8 8 8 8 8 f 8 8 f 8 f 8 f 
f f f 8 8 8 8 8 8 8 8 8 8 8 8 f 
. . f f f f f f f f f f f f f f 
                `, SpriteKind.Player)
        }
        currentBottle.setPosition(80, 10)
    }

    export function spawnBall() {
        baseball = sprites.create(img`
. . . . f f f f f f f f . . . . 
. . . f 2 1 1 1 1 1 1 1 f . . . 
. . f 1 2 2 1 1 1 1 1 1 1 f . . 
. f 1 1 1 2 1 1 1 1 1 1 1 2 f . 
f 1 1 1 1 2 1 1 1 1 1 1 1 2 1 f 
f 1 1 1 1 2 1 1 1 1 1 1 2 2 1 f 
f 1 1 1 1 2 1 1 1 1 1 2 2 1 1 f 
f 1 1 1 1 2 1 1 1 1 1 2 1 1 1 f 
f 1 1 1 1 2 1 1 1 1 2 2 1 1 1 f 
f 1 1 1 2 2 1 1 1 1 2 1 1 1 1 f 
f 1 1 1 2 1 1 1 1 1 2 1 1 1 1 f 
f 1 1 2 2 1 1 1 1 1 2 1 1 1 1 f 
. f 2 1 1 1 1 1 1 1 2 1 1 1 f . 
. . f 1 1 1 1 1 1 1 2 1 1 f . . 
. . . f 1 1 1 1 1 1 1 2 f . . . 
. . . . f f f f f f f f . . . . 
            `, SpriteKind.Projectile)

        baseball.setPosition(Math.randomRange(30, 130), Math.randomRange(30, 100))
        scaling.scaleToPercent(baseball, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    }

    controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
        if (currentBottle) currentBottle.x -= 2
    })

    controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
        if (currentBottle) currentBottle.x += 2
    })

    controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
        if (currentBottle) currentBottle.y += 2
    })
}