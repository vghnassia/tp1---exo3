let a = 0
let b = 0
basic.forever(function () {
    a = randint(0, 4)
    b = randint(0, 4)
    for (let index = 0; index < 8; index++) {
        basic.pause(100)
        led.plot(a, b)
        led.plotBrightness(a, b - 1, 150)
        led.plotBrightness(a, b - 2, 50)
        led.unplot(a, b - 3)
        b += 1
    }
})
