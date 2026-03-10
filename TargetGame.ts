// Coded by Wyatt in Blocks, Converted to JS by Akash

/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum TargetEnum {
    //% block="one"
    One
}

/**
 * Custom blocks
 */
//% weight=100 color=#ff2121 icon=""
namespace targetPractice {
    //% block
    export function startTargetPractice() {
        info.onCountdownEnd(function () {
            game.gameOver(true)
        })
        info.onLifeZero(function () {
            game.gameOver(false)
        })
        let projectile: Sprite = null
        scene.setBackgroundImage(img`
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeee
            `)
        let myTarget = sprites.create(img`
    . b b b . 
    b 2 2 2 b 
    b b b b b 
    b 2 2 2 b 
    b 2 2 2 b 
    b 2 2 2 b 
    b 2 2 2 b 
    b 2 2 2 b 
    b 2 2 2 b 
    b 2 2 2 b 
    b 2 2 2 b 
    b 2 2 2 b 
    b 2 2 2 b 
    b 2 2 2 b 
    b 2 2 2 b 
    b 2 2 2 b 
    b 2 2 2 b 
    b b b b b 
    b 2 2 2 b 
    . b b b . 
            `, SpriteKind.Player)
        let myEnemy = sprites.create(img`
            ..........fffffff..........
            .......fffdddddddfff.......
            ......fdddddddddddddf......
            ....ffdddddddddddddddff....
            ...fdddddddddddddddddddf...
            ...fdddddddddddddddddddf...
            ..fdddddddddddddddddddddf..
            .fdddddddddddddddddddddddf.
            .fdddddddddddddddddddddddf.
            fdddddddddddddddddddddddddf
            fdddddddddddddddddddddddddf
            fdddddddddddddddddddddddddf
            fdddddddddddddddddddddddddf
            fdddddddddddddddddddddddddf
            fdddddddddddddddddddddddddf
            fdddddddddddddddddddddddddf
            fdddddddddddddddddddddddddf
            fdddddddddddddddddddddddddf
            fdddddddddddddddddddddddddf
            fdddddddddddddddddddddddddf
            .fdddddddddddddddddddddddf.
            .fdddddddddddddddddddddddf.
            ..fdddddddddddddddddddddf..
            ...fdddddddddddddddddddf...
            ....fdddddddddddddddddf....
            .....fdddddddddddddddf.....
            ......ffdddddddddddff......
            ........fffffffffff........
        `, SpriteKind.Enemy)
        myTarget.setPosition(137, 40)
        myEnemy.setPosition(32, 49)
        myEnemy.setVelocity(0, 150)
        controller.moveSprite(myTarget)
        myTarget.setStayInScreen(true)
        myEnemy.setBounceOnWall(true)
        let time = randint(1, 100)

        game.splash("Use up and down keys")
        game.splash("Don't get hit by water!")

        info.setLife(5)
        info.startCountdown(45)

        sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
            info.changeLifeBy(-1)
            sprites.destroy(sprite)
            animation.runImageAnimation(myTarget, [img`
...................bbb..................
..................b222b.................
..................bbbbb.................
..................b222b.................
..................b222b.................
..................b222b.................
..................b222b.................
..................b222b.................
..................b222b.................
..................b222b.................
..................b222b.................
..................b222b.................
..................b222b.................
..................b222b.................
..................b222b.................
..................b222b.................
..................b222b.................
..................bbbbb.................
..................b222b.................
...................bbb..................
                `, img`
.......................bbbbbbbb.........
......................b22222222b........
......................b11111112b........
......................b22222212b........
......................b11111212b........
......................b22221212b........
......................b11121212b........
......................b22121212b........
......................b12121212b........
......................b12121212b........
......................b12121212b........
......................b12121212b........
......................b22121212b........
......................b11121212b........
......................b22221212b........
......................b11111212b........
......................b22222212b........
......................b11111112b........
......................b22222222b........
.......................bbbbbbbb.........
                `, img`
.....................bbbbbbbbbbbbbbbbbb.
....................b222222222222222222b
....................b211111111111111112b
....................b212222222222222212b
....................b212111111111111212b
....................b212122222222221212b
....................b212121111111121212b
....................b212121222222121212b
....................b212121211112121212b
....................b212121212212121212b
....................b212121212212121212b
....................b212121211112121212b
....................b212121222222121212b
....................b212121111111121212b
....................b212122222222221212b
....................b212111111111111212b
....................b212222222222222212b
....................b211111111111111112b
....................b222222222222222222b
.....................bbbbbbbbbbbbbbbbbb.
                `, img`
..................bbbbbbbb..............
.................b22222222b.............
.................b21111111b.............
.................b21222222b.............
.................b21211111b.............
.................b21212222b.............
.................b21212111b.............
.................b21212122b.............
.................b21212121b.............
.................b21212121b.............
.................b21212121b.............
.................b21212121b.............
.................b21212122b.............
.................b21212111b.............
.................b21212222b.............
.................b21211111b.............
.................b21222222b.............
.................b21111111b.............
.................b22222222b.............
..................bbbbbbbb..............
                `, img`
..................bbb...................
.................b222b..................
.................bbbbb..................
.................b222b..................
.................b222b..................
.................b222b..................
.................b222b..................
.................b222b..................
.................b222b..................
.................b222b..................
.................b222b..................
.................b222b..................
.................b222b..................
.................b222b..................
.................b222b..................
.................b222b..................
.................b222b..................
.................bbbbb..................
.................b222b..................
..................bbb...................
            `], 100, false)
        })
        game.onUpdateInterval(1, function () {
            time += -1
            if (time == 0) {
                projectile = sprites.createProjectileFromSprite(img`
                    9 9 9 9 9 9
                `, myEnemy, 100, 0)
                time = randint(0, 100)
            }
        })
        game.onUpdateInterval(0, function () {
            myTarget.x = 137
        })

    }
}