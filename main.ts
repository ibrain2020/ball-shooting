input.onButtonPressed(Button.A, function () {
    Counter = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Counter)
})
let Loop = 0
let Counter = 0
let PRESENT = 200
let NONE = 0
let DETECTED = 2
let Status = NONE
Counter = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) <= PRESENT && pins.analogReadPin(AnalogPin.P1) > PRESENT) {
        Loop = 100
        while (Status == NONE && Loop > 0) {
            if (pins.analogReadPin(AnalogPin.P0) <= PRESENT && pins.analogReadPin(AnalogPin.P1) <= PRESENT) {
                Status = DETECTED
                Counter += 1
                basic.showNumber(Counter)
            }
            Loop += -1
        }
    }
    Status = NONE
})
