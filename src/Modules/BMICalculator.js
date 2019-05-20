export const bmiCalculation = (weight, height, method) => {
  parseFloat(weight);
  parseFloat(height);
  let bmi;

  weight = isNaN(weight) ? 0 : weight;
  height = isNaN(height) ? 0 : height;

if (method == 'metric') {
  bmi = weight / (height / 100 * height / 100);
} if (method == 'imperial') {
  bmi = weight / (height * height) * 703;
}


  let finalBMI = parseFloat(bmi.toFixed(2));
  let BMIMessage = setBMIMessage(finalBMI)
  if (isNaN(finalBMI) || !isFinite(finalBMI) || finalBMI === 0) {
    return '';
  } else {
    return `You are ${BMIMessage} with a BMI of ${finalBMI}`;
  }
}

const setBMIMessage = (finalBMI) => {
  if (finalBMI < 18.5) {
    return "Underweight";
  }

  if (finalBMI > 18.5 && finalBMI < 25) {
    return "Normal";
  }

  if (finalBMI > 25 && finalBMI < 30) {
    return "Overweight";
  }

  if (finalBMI > 30) {
    return "Obese";
  }
}

//           cy.get('.awesome-selector')
//             .click()

//   imperial_bmi = weight / (height * height) * 703;
//        a function for imperial method
//   let method = method === 'metric' ? 'weight-in-kgs' : 'weight-in-lbs'
//   let method = method === 'metric' ? 'height-in-cm' : 'height-in-in'
//   let w = parseFloat(document.getElementById(weightFormat).value);
//   let h = parseFloat(document.getElementById(heightFormat).value);

//   method === 'metric' ? bmi() : imperial_bmi();