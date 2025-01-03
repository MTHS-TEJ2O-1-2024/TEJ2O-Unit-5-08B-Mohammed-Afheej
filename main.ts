  /* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mohammed Afheej
 * Created on: december 2024  
 * This program makes a car move when and when it gets to close to something stops  
*/

// defining variables and showing happy face
basic.showIcon(IconNames.Happy)
let distanceOfObject: number

// while true statement
while (true) {
    distanceOfObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // if distance is greater than 10
    if (distanceOfObject > 10) {
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(10, 48)
    } else {
        basic.showIcon(IconNames.No)
        robotbit.StpCarMove(0, 0)
        basic.pause(500)

        // backup
        robotbit.StpCarMove(-10, 48)
        basic.pause(1000)

        // turn 90 degree
        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0)
        basic.pause(500)
        robotbit.StpCarMove(10, 48)
    }
}
