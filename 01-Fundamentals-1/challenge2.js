// Returns a Boolean on whether the BMI of the first person is larger than that of the 2nd person
// Also returns the BMIs of both people
function checkBMI(mass1, height1, mass2, height2) {
  const bmi1 = mass1 / (height1 ** 2);
  const bmi2 = mass2 / (height2 ** 2);
  const isBiggerBMI = bmi1 > bmi2;
  return {bmi1, bmi2, isBiggerBMI};
}

let markHigherBMI1New = checkBMI(markMass1, markHeight1, johnMass1, johnHeight1);

let markHigherBMI2New = checkBMI(markMass2, markHeight2, johnMass2, johnHeight2);

if (markHigherBMI1New.isBiggerBMI) {
  console.log(`Mark's BMI (${markHigherBMI1New.bmi1}) is higher than John's (${markHigherBMI1New.bmi2})!`);
} else {
  console.log(`John's BMI (${markHigherBMI1New.bmi1}) is higher than Mark's (${markHigherBMI1New.bmi2})!`);
}
