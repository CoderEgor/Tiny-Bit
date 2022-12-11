let isObstacle = 0
let isOffRoad = 0
basic.forever(function () {
    if (Tinybit.Ultrasonic_Car() < 25 && Tinybit.Ultrasonic_Car() > 15) {
        Tinybit.RGB_Car_Big2(255, 255, 255)
        isObstacle = 0
    } else if (Tinybit.Ultrasonic_Car() <= 15 && Tinybit.Ultrasonic_Car() > 7) {
        Tinybit.RGB_Car_Big2(255, 255, 0)
        isObstacle = 0
    } else if (Tinybit.Ultrasonic_Car() <= 7) {
        Tinybit.RGB_Car_Big2(255, 0, 0)
        isObstacle = 1
    } else {
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
        isObstacle = 0
    }
})
basic.forever(function () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black) && isObstacle == 0) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
        isOffRoad = 0
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 128)
        isOffRoad = 0
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 128)
        isOffRoad = 0
    } else {
        isOffRoad = 1
    }
})
basic.forever(function () {
    if (isObstacle == 1 || isOffRoad == 1) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
})
