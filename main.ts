let a = 0
let b = 0
let x = 0
function lumiere () {
    a = randint(0, 4)
    b = randint(0, 4)
    led.plot(a, b)
    led.plotBrightness(a, b - 1, 150)
    led.plotBrightness(a, b - 2, 50)
}
basic.forever(function () {
    lumiere()
    x = 0
    for (let x = 0; x <= 4; x++) {
        let y = 0
        x = 0
        if (led.pointBrightness(x, y) == 255) {
            led.plotBrightness(x, y, 150)
            led.plot(x, y + 1)
        } else if (led.pointBrightness(x, y) == 150) {
            led.plotBrightness(x, y, 50)
        } else if (led.pointBrightness(x, y) == 50) {
            led.unplot(x, y)
        } else {
        	
        }
    }
    basic.pause(500)
})
