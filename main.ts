radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    outdoorTemp = receivedNumber
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showNumber(outdoorTemp)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showNumber(input.temperature())
})
let outdoorTemp = 0
radio.setGroup(23)
