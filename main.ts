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
