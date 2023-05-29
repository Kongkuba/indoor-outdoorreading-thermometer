radio.onReceivedNumber(function (receivedNumber) {
    outdoorTemp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(outdoorTemp)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
let outdoorTemp = 0
radio.setGroup(23)
