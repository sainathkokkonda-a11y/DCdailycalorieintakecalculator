function calculateCalories() {
  const gender = document.getElementById('calorieGender').value;
  const age = parseFloat(document.getElementById('calorieAge').value);
  const height = parseFloat(document.getElementById('calorieHeight').value);
  const weight = parseFloat(document.getElementById('calorieWeight').value);
  const activity = parseFloat(document.getElementById('activityLevel').value);

  if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
    alert("Please enter valid positive numbers for age, height, and weight.");
    return;
  }

  // BMR Calculation (Mifflin-St Jeor Formula)
  let bmr = (10 * weight) + (6.25 * height) - (5 * age);
  if (gender === 'male') {
    bmr += 5;
  } else {
    bmr -= 161;
  }

  // TDEE (Total Daily Energy Expenditure)
  const tdee = Math.round(bmr * activity);

  document.getElementById('maintainCalories').innerText = tdee + " Cal/day";
  document.getElementById('mildLossCalories').innerText = Math.round(tdee - 250) + " Cal/day";
  document.getElementById('weightLossCalories').innerText = Math.round(tdee - 500) + " Cal/day";
  document.getElementById('weightGainCalories').innerText = Math.round(tdee + 500) + " Cal/day";
}

// Initial calculation on page load
calculateCalories();
