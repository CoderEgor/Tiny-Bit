basic.forever(function () {
    if (Tinybit.Ultrasonic_Car() < 15 && Tinybit.Ultrasonic_Car() > 10) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.White)
    } else if (Tinybit.Ultrasonic_Car() <= 10 && Tinybit.Ultrasonic_Car() > 5) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
    } else if (Tinybit.Ultrasonic_Car() <= 5) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    } else {
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    }
})
basic.forever(function () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 128)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 128)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
})
