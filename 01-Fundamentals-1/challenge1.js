// Returns a Boolean on whether the BMI of the first person is larger than that of the 2nd person
function checkBMI(mass1, height1, mass2, height2) {
    const bmi1 = mass1 / (height1 ** 2);
    const bmi2 = mass2 / (height2 ** 2);
    console.log(bmi1, bmi2);
    return bmi1 > bmi2;
}

// Test Data #1
const markMass1 = 78, markHeight1 = 1.69;
const johnMass1 = 92, johnHeight1 = 1.95;

// Test Data #2
const markMass2 = 95, markHeight2 = 1.88;
const johnMass2 = 85, johnHeight2 = 1.76;

const markHigherBMI1 = checkBMI(markMass1, markHeight1, johnMass1, johnHeight1);

const markHigherBMI2 = checkBMI(markMass2, markHeight2, johnMass2, johnHeight2);

console.log(markHigherBMI1, markHigherBMI2);
