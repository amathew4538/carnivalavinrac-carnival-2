/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/
namespace SpriteKind {
    export const hammer = SpriteKind.create()
    export const selection = SpriteKind.create()
}

enum MoleAWhackEnum {
    //% block="one"
    One
}

/**
 * Custom blocks
 */
//% weight=100 color=#BA8E23 icon=""
namespace moleAWhack {
    //% block
    export function startMoleAWhack() {
        let Randx = 0
        let randY = 0
        let selection2: Sprite = null
        let pplayer = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
            `, SpriteKind.Player)
        let hammer2 = sprites.create(img`
    ...................22.............................
    ..................2222............................
    .................2f2222...........................
    ................222f2222..........................
    ...............2f222f2222.........................
    ..............222f222f2222........................
    .........88882f222f222f2222.......................
    ........8888222f222f222f2222......................
    .......888822222f222f222f2222.....................
    ......88888522222f222f222f2222....................
    ......888855522222f222f222f2222...................
    ......8825555522222f222f222f2222..................
    ......82225555522222f222f222f222..................
    ......222225555522222f222f222f2...................
    .....2f222225555522222f222f222....................
    ....222f222225555522222f222f2.....................
    ...2f222f222225555522222f222......................
    ..222f222f222225555522222f2.......................
    .2f222f222f222225555522222........................
    222f222f222f2222255555222.........................
    2222f222f222f22222555552..........................
    .2222f222f222f2222255555..........................
    ..2222f222f222f2222255555.........................
    ...2222f222f222f2222255555........................
    ....2222f222f222f2222.55555.......................
    .....2222f222f222f22...55555......................
    ......2222f222f222f.....55555.....................
    .......2222f222f22.......55555....................
    ........2222f222f.........55555...................
    .........2222f22...........55555..................
    ..........2222f.............55555.................
    ...........222...............55555................
    ............2.................55555...............
    ...............................55555..............
    ................................55555.............
    .................................55555............
    ..................................55555...........
    ...................................55555..........
    ....................................55555..8......
    .....................................55558888.....
    ......................................55588888....
    .......................................58888888...
    ........................................88888888..
    .......................................8888888888.
    ........................................888888888.
    .........................................888888888
    ..........................................88888888
    ...........................................888888.
    ............................................8888..
    .............................................88...
            `, SpriteKind.Player)
        hammer2.setPosition(300, 0)
        selection2 = sprites.create(img`
    55555555555................55555555555
    555555..........................555555
    5555..............................5555
    555................................555
    55..................................55
    55..................................55
    5....................................5
    5....................................5
    5....................................5
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    ......................................
    5....................................5
    5....................................5
    5....................................5
    55..................................55
    55..................................55
    555................................555
    5555..............................5555
    555555..........................555555
    55555555555................55555555555
            `, SpriteKind.selection)
        pplayer.setPosition(30, 81)
        selection2.setPosition(28, 83)
        let x = [48, 98, 148]
        let y = [84, 52, 20]
        scene.setBackgroundImage(img`
    6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666
    6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666
    6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666
    6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666
    6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777fffffffffffff777777777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777
    7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777
    7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777
    777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777
    7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777
    777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777
    777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777
    77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777
    7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777
    7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777
    7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777
    7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777
    7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777
    7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777
    7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777
    7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777
    77777777777fcccccccccccccccccccccccccccccccccc77777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777
    777777777777fcccccccccccccccccccccccccccccccf7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777
    777777777777ffcccccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777
    7777777777777ffcccccccccccccccccccccccccccff777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777
    777777777777777fcccccccccccccccccccccccccf7777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777
    7777777777777777ffcccccccccccccccccccccff777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777
    777777777777777777ffcccccccccccccccccff7777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777
    77777777777777777777fffffffffffffffff77777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777fffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777
    7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777
    777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777
    7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777
    777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777
    777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777
    77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777
    7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777
    7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777
    7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777
    7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777
    7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777
    7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777
    7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777
    7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777
    77777777777fcccccccccccccccccccccccccccccccccc7777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777
    777777777777fcccccccccccccccccccccccccccccccf777777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777
    777777777777ffcccccccccccccccccccccccccccccff7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777
    7777777777777ffcccccccccccccccccccccccccccff77777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777
    777777777777777fcccccccccccccccccccccccccf77777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777
    7777777777777777ffcccccccccccccccccccccff77777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777
    777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777
    777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777fffffffffffff777777777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777
    7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777
    7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777
    777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777
    7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777
    777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777
    777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777
    77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777
    7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777
    7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777
    7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777
    7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777
    7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777
    7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777
    7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777
    7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777
    77777777777fcccccccccccccccccccccccccccccccccc77777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777
    777777777777fcccccccccccccccccccccccccccccccf7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777
    777777777777ffcccccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777
    7777777777777ffcccccccccccccccccccccccccccff777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777
    777777777777777fcccccccccccccccccccccccccf7777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777
    7777777777777777ffcccccccccccccccccccccff777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777
    777777777777777777ffcccccccccccccccccff7777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777
    77777777777777777777fffffffffffffffff77777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777
    6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666
    6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666
    6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666
    6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666
    6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        game.onUpdateInterval(2000, function () {
            randY = randint(0, 2)
            Randx = randint(0, 2)
            hammer2.setPosition(x[Randx], y[randY])
        })
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            if (!(selection2.y - 32 < 19)) {
                selection2.y = selection2.y - 32
            }
        })
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            if (!(selection2.x - 50 < 28)) {
                selection2.x = selection2.x - 50
            }
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            if (!(selection2.x + 50 > 128)) {
                selection2.x = selection2.x + 50
            }
        })
        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            if (!(selection2.y + 32 > 83)) {
                selection2.y = selection2.y + 32
            }
        })
    }
}