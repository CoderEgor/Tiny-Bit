let isOffRoad = 0
let countDown = 0
let isObstacle = 0
function checkStatus () {
    if (isOffRoad == 1) {
        countDown += -1
        if (countDown >= 0) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 128)
            basic.pause(200)
            Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
            basic.pause(100)
            Tinybit.CarCtrl(Tinybit.CarState.Car_SpinRight)
            basic.pause(200)
            Tinybit.CarCtrl(Tinybit.CarState.Car_SpinLeft)
            basic.pause(100)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 128)
            basic.pause(100)
        } else {
            Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        }
    }
    if (isObstacle == 1) {
        if (Math.randomBoolean()) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 128)
            basic.pause(500)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 64)
            basic.pause(1800)
        } else {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 128)
            basic.pause(500)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 64)
            basic.pause(1800)
        }
    }
}
function followLine () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black) && isObstacle == 0) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 128)
        isOffRoad = 0
        countDown = 3
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 64)
        isOffRoad = 0
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 64)
        isOffRoad = 0
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White) && isObstacle == 0) {
        isOffRoad = 1
    }
}
function detectObstacle () {
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
}
input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        followLine()
        detectObstacle()
        checkStatus()
    }
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    control.reset()
})
